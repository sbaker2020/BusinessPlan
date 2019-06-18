function loadJSONFromExcelFile(filePageLink) {
	var fileData = '';
    $.ajax({
        url: filePageLink,
        type: "get",
        async: false,
        success: function(data) {
            fileData = data;
        },
        error: function() {
            console.log('Could not load event property data');
        }
    });
	
	var workbook = XLSX.read(fileData, {type: 'binary'});
	var firstSheet = workbook.SheetNames[0];
	
	var objectArray = XLSX.utils.sheet_to_row_object_array(firstSheet);
	var json = JSON.stringify(objectArray);
	console.log(json);
}

$( document ).ready(function() {
	loadJSONFromExcelFile("data/homepage.xlsx");
});