import { sqliteTable ,text} from "drizzle-orm/sqlite-core";

// CREATE TABLE LogIN_Stasts(
//     RollNumber VARCHAR(10) PRIMARY KEY, 
//     lastLogin DATETIME DEFAULT NULL,         
//     FOREIGN KEY (RollNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE    
// )


export interface LoginStatusSchema {
    RollNumber: string;
    lastLogin: Date;
}

export const LoginStatus = sqliteTable("LogIN_Stasts", {
    RollNumber: text('RollNumber').primaryKey(),
    lastLogin: text('lastLogin').default(""),
});