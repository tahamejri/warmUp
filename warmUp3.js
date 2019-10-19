// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 



var femaleClassmates=['lina','ruba','houda','hania','mayssa','fatima','fouz'] ;
var maleClassmates =  ['abdesalam','mohamed','adam','ali','sbeta','belkhir','ahmad'] ;
var classInstructors = ['youssef','seif','matt','tamara'] ;

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middleElement(array){
	if (array.length % 2 === 1){
		return array[Math.floor(array.length/2)];
	}
	else{
		return 'your array is even, here are the two element of the middle : '+ array[Math.floor(array.length/2)-1] + ' and ' + array[Math.floor(array.length/2)]
	}
}

<<<<<<< HEAD
// 3-Change all the numbers in the array to be multiplied by two for even indexes.


function multiplyBy2EvenIndex(array){
	for(var i = 0; i<array.length; i++){
		if(i%2 === 0){
			array[i] = array[i]*2 ;
		}
	}
	return array ;
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
