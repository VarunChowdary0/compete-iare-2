import {sqliteTable, text} from 'drizzle-orm/sqlite-core';



export interface StudentData{
    RollNumber: string;
    Name: string;
    Department: string;
}

export const studentData= sqliteTable('Student_Data', {
    RollNumber: text('RollNumber').primaryKey(),
    Name: text('Name'),
    Department: text('Department'),
});

`CREATE TABLE Student_Data(
            RollNumber VARCHAR(10) PRIMARY KEY,
            Name VARCHAR(255),
            Department VARCHAR(10),
            FOREIGN KEY (Department) REFERENCES Departments(departmentCode) ON DELETE CASCADE
)`