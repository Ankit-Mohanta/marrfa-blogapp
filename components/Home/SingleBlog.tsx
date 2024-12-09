'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { blogs, searchBlogs, BlogPost } from './blogs'
import BlogPostCard from '@/components/Home/BlogPostCard'
import Navbar from '@/components/Home/Navbar'
import Image from 'next/image'

const POSTS_PER_PAGE = 9

export default function BlogPage() {
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>(blogs)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)

  useEffect(() => {
    const search = searchParams.get('search')
    const title = searchParams.get('title')
    if (search) {
      setSearchTerm(search)
      setFilteredBlogs(searchBlogs(search))
      setCurrentPage(1)
    } else if (title) {
      const blog = blogs.find(b => b.title === decodeURIComponent(title))
      if (blog) {
        setSelectedBlog(blog)
      }
    } else {
      setFilteredBlogs(blogs)
      setSearchTerm('')
      setSelectedBlog(null)
    }
  }, [searchParams])

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex)

  const renderFullBlogPost = (blog: BlogPost) => {
    return (
      <article className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <Image src={blog.banner} alt={blog.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-4" width={400} height={400} unoptimized={true} />
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map(tag => (
            <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">{tag}</span>
          ))}
        </div>
        <p className="text-gray-600 mb-8">{blog.metaDescription}</p>
        {blog.content.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </article>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedBlog ? (
          renderFullBlogPost(selectedBlog)
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
            
            {searchTerm && (
              <p className="text-center mb-8">
                Showing results for: <span className="font-bold">{searchTerm}</span>
              </p>
            )}
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentBlogs.map((post) => (
                <BlogPostCard key={post.title} post={post} searchTerm={searchTerm} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 border rounded-lg ${
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <footer className="border-t py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-6 items-center flex-wrap">
              <a href="#" className="text-gray-500 hover:text-gray-900">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

