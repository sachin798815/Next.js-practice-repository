import { useRouter } from "next/router";

function SubnewsPage(){
    const router=useRouter();
    console.log(router.query.subnews)
    return <h1>The SubnewsPage</h1>
}
export default SubnewsPage;