import { table } from "console";
import { sqliteTable,text,int, primaryKey } from "drizzle-orm/sqlite-core";


// CREATE TABLE Progress (
//         ProgressDate DATE,
//         DepartmentAverage INT,
//         Department VARCHAR(10),
//     FOREIGN KEY (Department) REFERENCES Departments(departmentCode) ON DELETE CASCADE,
//     PRIMARY KEY (ProgressDate, Department)
// )


export interface ProgressSchema {
    ProgressDate: Date;
    DepartmentAverage: number;
    Department: string;
}

export const Progress = sqliteTable('Progress', {
    ProgressDate: text('ProgressDate'),
    DepartmentAverage: int('DepartmentAverage'),
    Department: text('Department'),
}, (table) => ({
    pk: primaryKey(table.ProgressDate, table.Department),
}));