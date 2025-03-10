import { db } from "@/db/db";
import { User, users } from "@/models/userSchema";

export default async function Home() {
  const result = await db.select().from(users).limit(10).run();
  console.log(result)
  const data:any = result.rows;

  return (
    <div>
      <h1>Compete</h1>
      <p>Compete is a platform for conducting online quizzes and competitions.</p>
      {
        data.map((user:User) => (
          <div>{user.RollNumber} - {user.Password}</div>
        ))
      }
    </div>
  );
}
