import { cache } from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  title: string;
  publishedDate: string;
  author: string;
  readTime: string;
  description: string;
  content: string;
  imageURL: string;
};

const postsData = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const posts: BlogPost[] = JSON.parse(fileContents);
  return posts;
});

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug);
  const posts = await postsData();
  const post = posts.find((p) => p.title === decodedSlug);

  return (
    <div className="flex flex-col mt-16 w-[46rem]">
      <div className="mb-6">
        <Link
          href={"/"}
          className=" dark:bg-gray-500 p-2 text-white bg-black rounded-md"
        >
          back
        </Link>
      </div>
      {!post ? (
        <div>Post not found</div>
      ) : (
        <article>
          <h1 className="text-4xl font-bold mb-2">{decodedSlug}</h1>
          <h3 className="text-lg mb-2">
            Written by {post.author} on {post.publishedDate}
          </h3>
          <div className="flex flex-col">
            <div className="h-full w-full flex items-center justify-center my-6">
              <Image
                src={post.imageURL}
                alt={post.title}
                height={1080}
                width={1080}
                className="h-1/2 w-1/2 object-cover text-transparent inset-0 rounded-md"
              />
            </div>
            <p>{post.content}</p>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogPostPage;
