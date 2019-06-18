function loadJSONFromExcelFile(filePageLink) {
	var workbook = XLSX.readFile(filePageLink);
    var sheet_name_list = workbook.SheetNames;
    console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))
}

$( document ).ready(function() {
	loadJSONFromExcelFile("../data/homepage.xlsx");
});