function loadJSONFromExcelFile(filePageLink) {
	var fileData = '';
    $.ajax({
        url: '../catering/' + eventId + '.txt',
        type: "get",
        async: false,
        success: function(data) {
            fileData = data;
        },
        error: function() {
            console.log('Could not load event property data');
        }
    });
	
    var workbook = XLSX.read(fileData, {
      type: 'binary'
    });

    workbook.SheetNames.forEach(function(sheetName) {
      var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
      var json_object = JSON.stringify(XL_row_object);
      console.log(json_object);
    })
}

$( document ).ready(function() {
	loadJSONFromExcelFile("../data/homepage.xlsx");
});