import { sqliteTable,text,int } from "drizzle-orm/sqlite-core";


// CREATE TABLE GeekForGeeks(
//     RollNumber VARCHAR(10) PRIMARY KEY,
//     Username VARCHAR(255) UNIQUE,        
//     CollegeName VARCHAR(255),        
//     Rank_ INT DEFAULT NULL,        
//     ProblemSolved INT DEFAULT 0,       
//     ContestRating INT DEFAULT 0,        
//     Score INT DEFAULT 0,        
// FOREIGN KEY (RollNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE    
// )

export interface GeeksForGeeksSchema {
    RollNumber: string;
    Username: string;
    CollegeName: string;
    Rank_: number;
    ProblemSolved: number;
    ContestRating: number;
    Score: number;
}


export const GeeksForGeeks = sqliteTable("GeekForGeeks", {
    RollNumber: text('RollNumber').primaryKey(),
    Username: text('Username').unique(),
    CollegeName: text('CollegeName'),
    Rank_: int('Rank_').default(0),
    ProblemSolved: int('ProblemSolved').default(0),
    ContestRating: int('ContestRating').default(0),
    Score: int('Score').default(0),
});