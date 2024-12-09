import Image from 'next/image'
import { getRandomTagColor } from '@/utils/colors'

interface BlogPostProps {
  title: string
  description: string
  date: string
  image: string
  tags: string[]
  link: string
}

export default function BlogPost({ title, description, date, image, tags, link }: BlogPostProps) {
  return (
    <article className="mb-8">
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="w-full rounded-lg object-cover aspect-[2/1] mb-4"
      />
      <div className="mb-2">
        <time className="text-sm text-gray-500">{date}</time>
      </div>
      <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
        <a href={link}>{title}</a>
      </h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const { bg, text } = getRandomTagColor()
          return (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm ${bg} ${text}`}
            >
              {tag}
            </span>
          )
        })}
      </div>
    </article>
  )
}

