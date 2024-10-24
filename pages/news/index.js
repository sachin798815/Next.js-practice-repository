import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The NewsPage</h1>
      <ul>
        <li>
          <Link href='/news/g'>first news link</Link>
        </li>
        <li>second news</li>
      </ul>
    </>
  );
}
export default NewsPage;
