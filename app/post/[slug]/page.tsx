import { cache } from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  url: string;
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
  const posts = await postsData();
  const post = posts.find((p) => p.url === params.slug);

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
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <h3 className="text-lg mb-2">
            Written by {post.author} on {post.publishedDate}
          </h3>
          <div className="flex flex-col">
            <div className="min-h-[6rem] min-w-[14rem] my-6">
              <Image
                src={post.imageURL}
                alt={post.title}
                width={1080}
                height={1080}
                objectFit="cover"
                objectPosition="center"
                className="rounded-md"
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
