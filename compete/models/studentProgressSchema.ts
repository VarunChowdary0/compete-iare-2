import { sqliteTable, int, text, primaryKey } from "drizzle-orm/sqlite-core";
import { studentData } from "./studentSchema";

// The SQL equivalent:
// CREATE TABLE Student_Progress(
//     RollNumber VARCHAR(10),
//     ProgressDate DATE,
//     LeetCode INT CHECK (LeetCode >= 0),
//     CodeChef INT CHECK (CodeChef >= 0),
//     HackerRank INT CHECK (HackerRank >= 0),
//     GeekForGeeks INT CHECK (GeekForGeeks >= 0),
//     FOREIGN KEY (RollNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE,
//     PRIMARY KEY (ProgressDate, RollNumber)
// )

export interface StudentProgressSchema {
  RollNumber: string;
  ProgressDate: Date;
  LeetCode: number;
  CodeChef: number;
  HackerRank: number;
  GeekForGeeks: number;
}

export const StudentProgress = sqliteTable(
  "Student_Progress",
  {
    RollNumber: text("RollNumber").references(()=>studentData.RollNumber),
    ProgressDate: text("ProgressDate"),
    LeetCode: int("LeetCode"),
    CodeChef: int("CodeChef"),
    HackerRank: int("HackerRank"),
    GeekForGeeks: int("GeekForGeeks"),
  }
);
