'use client'

import Navbar from './Navbar'
import BlogPostCard from './BlogPostCard'
import { blogs } from './blogs'

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, i) => (
              <BlogPostCard key={i} post={post} />
            ))}
          </div>
        </section>

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

