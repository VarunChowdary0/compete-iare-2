import { sqliteTable,text,int } from "drizzle-orm/sqlite-core";
import { studentData } from "./studentSchema";

// CREATE TABLE Certifications(
//     RollNumber VARCHAR(10) ,                
//     Title VARCHAR(255) NOT NULL ,                
//     URL TEXT,                
//     Description TEXT,                
//     Caption   VARCHAR(255),                
//     C_id VARCHAR(255) UNIQUE,                
//     isDeleted INTEGER DEFAULT 0,                 
//     Primary kEY (RollNumber,C_id),                
//     FOREIGN KEY (ROllNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE
// )


export interface CertificationsSchema {
    RollNumber: string;
    Title: string;
    URL: string;
    Description: string;
    Caption: string;
    C_id: string;
    isDeleted: number;
}

export const Certifications = sqliteTable("Certifications", {
    RollNumber: text('RollNumber').references(() => studentData.RollNumber),
    Title: text('Title').notNull(),
    URL: text('URL'),
    Description: text('Description'),
    Caption: text('Caption'),
    C_id: text('C_id').unique(),
    isDeleted: int('isDeleted').default(0),
});