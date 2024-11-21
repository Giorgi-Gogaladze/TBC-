import { fetchBlogs } from "../../Utilities/fetchBlogs";
import Button from "@/Components/Button/Button";
 
interface BlogPost {
  id: number;
  title: string;
  description: string;
}
 
export default async function Blog() {
  const posts: BlogPost[] = await fetchBlogs();
 
  return (
    <section className="main-width blog flex flex-col gap-8 items-center relative min-h-[57.8vh]">
  <div>
    <h1 className="text-white">Add Posts:</h1>
  </div>
  <div className="title flex flex-col gap-0 w-[20rem] mt-12">
    <div className="first bg-[#F3D23E] px-4 py-2 text-2xl font-semibold flex items-center justify-center text-black">
      New Blogging
    </div>
    <div className="second bg-white px-4 py-2 text-2xl font-semibold flex items-center justify-center w-[10rem] text-black">
      System
    </div>
  </div>
  {posts.map((post) => (
    <div className="card border-white border-5 my-4 px-4 py-2 flex flex-col gap-4 items-center font-lato relative">
      <h2 className="text-gold text-4xl font-semibold">{post.title}</h2>
      <p className="text-white text-lg">{post.description}</p>
      <Button postsId={post.id} />
    </div>
  ))}
</section>

  );
}
 