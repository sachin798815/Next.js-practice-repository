import { useRouter } from "next/router";

const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
  
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
  
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  

function DevPage(){
  const router = useRouter();
  const { developer } = router.query;

  if (!developer) {
    return <h1>Loading...</h1>;
  }

  const dev = details.find((item) => item.id == developer);

  if (!dev) {
    return <h1>Developer not found</h1>;
  }

  return <h1>{dev.name}</h1>;
}
export default DevPage;