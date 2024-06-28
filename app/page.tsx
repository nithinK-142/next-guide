import { db } from "@/db";
import { postsTable, usersTable } from "@/db/schema";

export default async function Home() {
  const postss = await db.query.postsTable.findMany();
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-center text-2xl p-24">NextJs Turso</h1>
      <form
        action={async () => {
          "use server";
          await db.insert(usersTable).values({
            id: 1,
            name: "Nithin",
            age: 24,
            email: "nithin@mail.com",
          });

          await db.insert(postsTable).values({
            title: "Turso in Nextjs",
            content: "How to use turso in nextjs project",
            userId: 1,
          });
        }}
      >
        <button className="px-4 py-1 transition-colors duration-500 rounded-lg text-white bg-black/80 dark:bg-white/80 dark:text-black">
          Submit
        </button>
      </form>

      <div className="mt-20">
        <h2>POSTS</h2>
        {postss.map((post, index) => (
          <div key={index} className="bg-stone-700 p-4 rounded-md">
            <p>{post.title}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
