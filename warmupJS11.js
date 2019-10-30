alert('it worked')

var side = '' ;
$('#rightButton').on('click', function(){
	side = 'right' ;
})

$('#leftButton').on('click', function(){
	side = 'left'
})



$('#createButton').on('click', function(){
	if(side === 'right'){
		$('#rightList').append('<li></li>') ;
	}
	else if(side === 'left'){
		$('#leftList').append('<li></li>') ;
	}
})