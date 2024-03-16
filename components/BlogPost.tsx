import posts from "@/data/posts.json";
import Image from "next/image";
import Link from "next/link";

const BlogPost = () => {
  const totalPosts = posts.length;
  return (
    <div>
      {posts.map((post, index) => (
        <article
          key={index}
          className={`py-6 flex justify-between ${
            index === totalPosts - 1 ? "" : "border-b border-slate-400/50"
          }`}
        >
          <div className="pr-2">
            <div className="text-3xl pb-2 hover:underline cursor-pointer">
              <Link href={`/post/${post.title}`}>{post.title}</Link>
            </div>
            <div className="flex text-sm opacity-90">
              <p className="pb-2">{post.publishedDate}</p>
              <p className="pl-4">📖 {post.readTime} read</p>
            </div>
            <p className="pb-2 text-[22px] opacity-95">{post.description}</p>
          </div>
          <div className="min-h-[12rem] min-w-[10rem] object-cover pb-2">
            <Image
              src={post.imageURL}
              alt={post.title}
              height={200}
              width={200}
              className="h-full object-cover text-transparent inset-0 rounded-md"
            />
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPost;
