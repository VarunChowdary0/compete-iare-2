import { sqliteTable,text,int } from "drizzle-orm/sqlite-core";


// CREATE TABLE CodeChef(
//     RollNumber VARCHAR(10) PRIMARY KEY,
//     Username VARCHAR(255) UNIQUE,
//     Name VARCHAR(255),
//     Contests INT,
//     ProblemSolved INT,
//     FOREIGN KEY (RollNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE\n
// );


export interface CodechefSchema {
    RollNumber: string;
    Username: string;
    Name: string;
    Contests: number;
    ProblemSolved: number;
}

export const Codechef = sqliteTable("codechef", {
    RollNumber: text('RollNumber').primaryKey(),
    Username: text('Username').unique(),
    Name: text('Name'),
    Contests: int('Contests'),
    ProblemSolved: int('ProblemSolved'),
});

