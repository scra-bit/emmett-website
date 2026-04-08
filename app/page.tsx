import { MDXRemote } from 'next-mdx-remote/rsc'
import { BlogPosts } from 'app/components/posts'

const bioContent = `
Hey, I'm Emmett Buck-Thompson. I'm a student at New England Innovation Academy with a thing for open source — I believe software should be built in the open, and I try to live that out. Right now I'm working on [Writer](https://github.com/scra-bit/Writer), an open-source writing app. I try to keep up with the AI space as it moves fast and touches everything I care about. Outside of that, you'll probably find me DJing or drawing.
`

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Emmett Buck-Thompson
      </h1>
      <div className="mb-4 prose dark:prose-invert max-w-none">
        <MDXRemote source={bioContent} />
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
