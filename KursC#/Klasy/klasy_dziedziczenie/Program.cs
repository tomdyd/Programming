using klasy_dziedziczenie;

ExcelFile excelFile = new ExcelFile();
PowerpointFile powerpointFile = new PowerpointFile();
WordFile wordFile = new WordFile();

excelFile.GenereteReport();
powerpointFile.Present();
wordFile.Print();