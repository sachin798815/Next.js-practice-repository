import Link from "next/link";

function AboutPage() {
  return (<>
  <h1>The AboutPage</h1>
  <ul>
    <li><Link href='/about/1'>Yash</Link></li>
    <li><Link href='/about/2'>Vaibhav</Link></li>
    <li><Link href='/about/3'>Suresh</Link></li>
  </ul>
  </>
);
}
export default AboutPage;
