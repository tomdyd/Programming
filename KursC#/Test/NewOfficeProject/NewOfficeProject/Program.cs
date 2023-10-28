using NewOfficeProject;

ExcelFile excelFile = new ExcelFile();

excelFile.FileName = "excel-file";
excelFile.CreatedOn = DateTime.Now;

excelFile.GenerateReport();

WordDocumentFile wordDocumentFile = new WordDocumentFile();

wordDocumentFile.FileName = "word-document-file";
wordDocumentFile.CreatedOn = DateTime.Now;

wordDocumentFile.Print();

List<int> intList = new List<int>();