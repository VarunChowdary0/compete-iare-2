import { sqliteTable,text,int } from "drizzle-orm/sqlite-core";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";

// CREATE TABLE Skills (
//     RollNumber VARCHAR(10),
//     Skill VARCHAR(255) NOT NULL,
//     Skill_Level VARCHAR(20) DEFAULT 'beginner',
//     Skill_Type VARCHAR(20) DEFAULT 'hardskill',
//     PRIMARY KEY (RollNumber, Skill),
//     FOREIGN KEY (RollNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE,
//     CHECK (Skill_Level IN ('beginner', 'intermediate', 'advanced')),
//     CHECK (Skill_Type IN ('hardskill', 'softskill'))
// )


export interface SkillSchema {
    RollNumber: string;    
    Skill: string;
    Skill_Level: string;
    Skill_Type: string; 
}

export const Skill = sqliteTable("Skills", {
    RollNumber: text('RollNumber'),
    Skill: text('Skill').notNull(),
    Skill_Level: text('Skill_Level').default('beginner'),
    Skill_Type: text('Skill_Type').default('hardskill'),
});