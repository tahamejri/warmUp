var X = 0;

    $( "button" ).on('click', function() {
               
	      	var v = $("input").val();
	      	var $ul = $('ul');
	      	var toAddlist = $('<li></li>');
            
	      	if(X %2 === 0){
                toAddlist.text($("input").val()).addClass('C1');
	         }
	        else{
                toAddlist.text($("input").val()).addClass('C2');	
	         }
	         X++;
             toAddlist.appendTo($('ul'));
      });