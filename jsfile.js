
var x = 0 ;
$('button').on('click', function(){
	
	x++ ;
	if(x%1 === 1){
		anClass = 'class1' ;	
	}
	else{
		anClass = 'class2' ;	
	}

	$('ul').append($('input').val().atr('class','anClass'))})
