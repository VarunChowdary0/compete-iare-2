import { sqliteTable,text,int } from "drizzle-orm/sqlite-core";


// CREATE TABLE HackerRank(
//     RollNumber VARCHAR(10) PRIMARY KEY,
//     Username VARCHAR(255) UNIQUE,
//     Name VARCHAR(255),
//     oneStarBadge INT DEFAULT 0,        
//     twoStarBadge INT DEFAULT 0,        
//     threeStarBadge INT DEFAULT 0,        
//     fourStarBadge INT DEFAULT 0,        
//     fiveStarBadge INT DEFAULT 0,        
//     AdvancedCertifications INT DEFAULT 0,        
//     IntermediateCertifications INT DEFAULT 0,        
//     BasicCertifications INT DEFAULT 0,        
// FOREIGN KEY (RollNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE   
// )



export interface HackerRankSchema {
    RollNumber: string;
    Username: string;
    Name: string;
    oneStarBadge: number;
    twoStarBadge: number;
    threeStarBadge: number;
    fourStarBadge: number;
    fiveStarBadge: number;
    AdvancedCertifications: number;
    IntermediateCertifications: number;
    BasicCertifications: number;
}

export const HackerRank = sqliteTable("HackerRank", {
    RollNumber: text('RollNumber').primaryKey(),
    Username: text('Username').unique(),
    Name: text('Name'),
    oneStarBadge: int('oneStarBadge').default(0),
    twoStarBadge: int('twoStarBadge').default(0),
    threeStarBadge: int('threeStarBadge').default(0),
    fourStarBadge: int('fourStarBadge').default(0),
    fiveStarBadge: int('fiveStarBadge').default(0),

    AdvancedCertifications: int('AdvancedCertifications').default(0),
    IntermediateCertifications: int('IntermediateCertifications').default(0),
    BasicCertifications: int('BasicCertifications').default(0),

});
