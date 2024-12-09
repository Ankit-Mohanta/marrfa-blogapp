import Image from 'next/image'
import Link from 'next/link'
import { getRandomTagColor } from '@/utils/colors'
import { BlogPost } from './blogs'

interface BlogPostCardProps {
  post: BlogPost
  searchTerm?: string
}

export default function BlogPostCard({ post, searchTerm }: BlogPostCardProps) {
  const highlightText = (text: string) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === searchTerm.toLowerCase() ? 
            <span key={i} className="bg-yellow-200">{part}</span> : 
            part
        )}
      </>
    );
  };

  return (
    <Link href={`/blog?title=${encodeURIComponent(post.title)}`}>
    <article className="mb-8">
      <div className="relative w-full aspect-[2/1] mb-4">
        <Image
          src={post.banner}
          alt={post.title}
          fill
          className="rounded-lg object-cover"
          unoptimized={true}
        />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
          {highlightText(post.title)}
        </h2>
      </div>
      <p className="mb-4">{highlightText(post.metaDescription)}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => {
          const { bg, text } = getRandomTagColor()
          return (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm ${bg} ${text}`}
            >
              {highlightText(tag)}
            </span>
          )
        })}
      </div>
    </article>
    </Link>
  )
}

