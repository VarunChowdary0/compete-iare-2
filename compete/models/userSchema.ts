import { sqliteTable, text} from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('Users', {
  rollNumber: text('RollNumber').primaryKey(),
  password: text('Password'),
});

export interface User{
    RollNumber: string;
    Password: string;
}

// `CREATE TABLE Users 
//     (
//         RollNumber VARCHAR(10) PRIMARY KEY,
//         Password VARCHAR(255),
//         FOREIGN KEY (RollNumber) REFERENCES Student_Data(RollNumber) ON DELETE CASCADE) ;`
