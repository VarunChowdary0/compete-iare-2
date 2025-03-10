import { sqliteTable,text } from "drizzle-orm/sqlite-core"


export const departments = sqliteTable('Departments', {
    departmentCode: text('departmentCode').primaryKey(),
    departmentName: text('departmentName').unique()
});

export interface Department{
    departmentCode : string,
    departmentName : string
}

// `CREATE TABLE Departments(
//         departmentCode VARCHAR(10) PRIMARY KEY,
//         departmentName VARCHAR(255) UNIQUE
// )`
