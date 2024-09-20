import axios from "axios";

export default async function Home() {
  const res=await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const data=res.data
  return (
    <>
    <div>{data?.name}</div>
    <div>{data?.email}</div>
    </>
    
  );
}
