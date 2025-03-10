import { table } from "console";
import { primaryKey } from "drizzle-orm/gel-core";
import { sqliteTable,text,int } from "drizzle-orm/sqlite-core";
import { studentData } from "./studentSchema";

// CREATE TABLE Projects(
//     RollNumber VARCHAR(10) ,
//     Title VARCHAR(255) NOT NULL ,
//     URL TEXT,
//     Description TEXT,
//     Caption   VARCHAR(255),
//     P_id VARCHAR(255) UNIQUE, isDeleted INTEGER DEFAULT 0,
//     Primary kEY (RollNumber,P_id),
//     FOREIGN KEY (ROllNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE
// )


export interface ProjectSchema {
    RollNumber: string;
    Title: string;
    URL: string;
    Description: string;
    Caption: string;
    P_id: string;
    isDeleted: number;
}


export const projects = sqliteTable("Projects", {
    RollNumber: text('rollnumber').references(() => studentData.RollNumber),
    Title: text('Title').notNull(),
    URL: text('URL'),
    Description: text('Description'),
    Caption: text('Caption'),
    P_id: text('P_id').unique(),
    isDeleted: int('isDeleted').default(0),
});