import { sqliteTable,text } from "drizzle-orm/sqlite-core";

// CREATE TABLE Personal_Info (
//     RollNumber VARCHAR(10) PRIMARY KEY,
//     MailAddress VARCHAR(255) UNIQUE,
//     Resume VARCHAR(255) DEFAULT NULL,
//     About TEXT,
//     LinkedIN VARCHAR(255),
//     YouTube VARCHAR(255),
//     FaceBook VARCHAR(255),
//     Instagram VARCHAR(255),
//     X VARCHAR(255),
//     GitHub VARCHAR(255),
//     FOREIGN KEY (RollNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE
// )


export interface PersonalInfoSchema {
    RollNumber: string;
    MailAddress: string;
    Resume: string;
    About: string;
    LinkedIN: string;
    YouTube: string;
    FaceBook: string;
    Instagram: string;
    X: string;
    GitHub: string;
}

export const PersonalInfo = sqliteTable("Personal_Info", {
    RollNumber: text('RollNumber').primaryKey(),
    MailAddress: text('MailAddress').unique(),
    Resume: text('Resume').default(""),
    About: text('About').default(""),
    LinkedIN: text('LinkedIN').default(""),
    YouTube: text('YouTube').default(""),
    FaceBook: text('FaceBook').default(""),
    Instagram: text('Instagram').default(""),
    X: text('X').default(""),
    GitHub: text('GitHub').default(""),
});