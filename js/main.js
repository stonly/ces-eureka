var updateComplete = function(){

	$('img').each(function() { this.src = 'http://ces16.mapyourshow.com/mys_shared'+this.src.split('mys_shared')[1]; } );
	$('#ces-table').find('a').each(function() { if(this.href.indexOf('URL') > -1) {this.href = this.text;}  });
	$('#ces-table').find('a').each(function() { if(this.href.indexOf('floorplan_link') > -1) { this.href = 'http://ces16.mapyourshow.com/7_0'+this.href.split('/7_0')[1];}  });


};

//var dynatable = $('#ces-table').dynatable().bind('dynatable:init', updateComplete);

$.ajax({
  url: 'data/scrape_output.json',
  success: function(data){

    $('#ces-table').dynatable({
      dataset: {
        records: data
      }
    }).bind('dynatable:afterUpdate', updateComplete);
  }
}).done(function(){
	updateComplete();
});
//



$('#search-tags').change( function() {
  var value = $(this).val();
  if (value === "") {
    $('#ces-table').queries.remove("tags");
  } else {
    $('#ces-table').queries.add("tags",value);
  }
  $('#ces-table').process();
});