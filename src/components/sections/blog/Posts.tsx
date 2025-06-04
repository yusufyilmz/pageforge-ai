import { Grid } from '@pageforge/once-ui/components'
import Post from './Post'

// Type for post data
type PostData = {
  metadata: {
    title: string
    publishedAt: string
    summary: string
    image?: string
    images: string[]
    tag?: string
    team: any[]
    link?: string
  }
  slug: string
  content: string
}

interface PostsProps {
  range?: [number] | [number, number]
  columns?: '1' | '2' | '3'
  thumbnail?: boolean
  items?: PostData[] // Accept posts as props
  postsPath?: string[] // Optional path for server components
}

export function Posts({
  range,
  columns = '1',
  thumbnail = false,
  items = []
}: PostsProps) {
  // Use provided posts data instead of fetching
  const allBlogs = items

  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    )
  })

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length
      )
    : sortedBlogs

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid
          columns={columns}
          mobileColumns="1"
          fillWidth
          marginBottom="40"
          gap="m"
        >
          {displayedBlogs.map(post => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} />
          ))}
        </Grid>
      )}
    </>
  )
}
