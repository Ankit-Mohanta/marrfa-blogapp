import dynamic from 'next/dynamic'

const BlogPage = dynamic(
    ()=> import('@/components/Home/SingleBlog'),
    {
        loading: () => (
          <div className='w-full h-full flex items-center justify-center'>
            Loading...
          </div>
        )
      }
  )

const SingleBlogPage = () => {
  return (
    <BlogPage />
  )
}

export default SingleBlogPage