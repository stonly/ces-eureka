$.ajax({
  url: 'data/scrape_output.json',
  success: function(data){
  	console.log(data);

    $('#ces-table').dynatable({
      dataset: {
        records: data
      }
    });
  }
});

$('#search-tags').change( function() {
  var value = $(this).val();
  if (value === "") {
    $('#ces-table').queries.remove("tags");
  } else {
    $('#ces-table').queries.add("tags",value);
  }
  $('#ces-table').process();
});