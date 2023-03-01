// // //רק בסיעתא דשמיא

// import React from 'react'
// import * as FileSaver from "file-saver";
// import * as XLSX from "xlsx";

//  const ExportToExcel = ({ myData, fileName }) => {
//   const fileType =
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
//   const fileExtension = ".xlsx";

//   const exportToCSV = (myData, fileName) => {
    
//     const ws = XLSX.utils.json_to_sheet(myData);
//     console.log("exel")
//     const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
//     const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     const data = new Blob([excelBuffer], { type: fileType });
//     FileSaver.saveAs(data, fileName + fileExtension);
    
//   };

//   return (
//     <button onClick={(e) => exportToCSV(myData, fileName)}>Export</button>
//   );
// };
// export default ExportToExcel


