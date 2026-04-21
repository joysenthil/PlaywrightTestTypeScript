//import excel plugin

import * as EXCEL from "xlsx";
import fs from "fs";

// define test data structure
interface TestRecord {
  Skill1: string;
  Skill2: string;
}

// create methods to read excel file
export function readExcelFile(filePath: string) {
  //Read the excel file as binary string
  const file = fs.readFileSync(filePath);
  //parse into workbook
  const workbook = EXCEL.read(file);
  // get the first sheet
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  // convert the sheet data into json format

  const rawdata: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 });
  //convert raw data into testrecord

  const records: TestRecord[] = rawdata.slice(1).map((columns: any) => ({
    Skill1: columns[0],
    Skill2: columns[1],
  }));

  return records;
}
