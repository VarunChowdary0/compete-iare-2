import { sqliteTable,text,int } from "drizzle-orm/sqlite-core";

export interface LeetcodeSchema {
    RollNumber: string;
    Username: string;
    Name: string;
    EasyProblemSolved: number;
    MediumProblemSolved: number;
    HardProblemSolved: number;
}

export const Leetcode = sqliteTable("Leetcode", {
    RollNumber: text('RollNumber').primaryKey(),
    Username: text('Username').unique(),
    Name: text('Name'),
    EasyProblemSolved: int('EasyProblemSolved').default(0),
    MediumProblemSolved: int('MediumProblemSolved').default(0),
    HardProblemSolved: int('HardProblemSolved').default(0),
});

// CREATE TABLE LeetCode(
//     RollNumber VARCHAR(10) PRIMARY KEY,
//     Username VARCHAR(255) UNIQUE,
//     Name VARCHAR(255),
//     EasyProblemSolved INT DEFAULT 0,
//     MediumProblemSolved INT DEFAULT 0,
//     HardProblemSolved INT DEFAULT 0,
// FOREIGN KEY (RollNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE\n    
// )
