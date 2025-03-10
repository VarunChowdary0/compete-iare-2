import { db } from "@/db/db";
import { User, users } from "@/models/userSchema";
import { use } from "react";

export default async function Home() {
  const result = await db.select().from(users).limit(10).run();
  console.log(result)
  const data:any = result.rows;

  return (
    <div>
      <h1>Compete</h1>
      <p>Compete is a platform for conducting online quizzes and competitions.</p>
      {/* {
        data.map((user:User) => (
          <div key={user.RollNumber}>{user.RollNumber} - {user.Password}</div>
        ))
      } */}
      <h1 className=" text-5xl">Home</h1>
    </div>
  );
}
