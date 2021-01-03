import Link from 'next/link'
export default () => {
  return (
    <>
      <h1>Next.jsアプリのトップページ with TypeScript</h1>
      <Link href="/posts/first-post"><a>read first post</a></Link>
    </>
  )
}
