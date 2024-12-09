export interface BlogPost {
  id: string
  title: string
  content: string
  metaDescription: string
  tags: string[]
  date: string
  images: string[]
}

export function saveBlogPost(blogPost: BlogPost) {
  const posts = getAllBlogPosts()
  posts.push(blogPost)
  localStorage.setItem('blogPosts', JSON.stringify(posts))
}

export function getAllBlogPosts(): BlogPost[] {
  const postsJson = localStorage.getItem('blogPosts')
  return postsJson ? JSON.parse(postsJson) : []
}

