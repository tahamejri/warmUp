// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(str){
	var arr = [] ;
	var consStr = ''
	var newArr = [] ;
	var cnt =0
	var result = '' ;
	for (var i = 0; i<str.length; i++){					//in this stage we will split the string and put it in a new array
		consStr+=str[i]									//we loop the str and copy its charachters in a new str
		if(str[i] === ' ' || i === str.length-1){		// and each time we encounter a space we put that constructed string in an array
			arr[cnt] = consStr ;						
			consStr = '';
			cnt++
		}
	}
	for (var j = arr.length-1; j>=0; j--){				//now we make a new array and we fill it with the same values of the above constructed array but reversed
		var i= arr.length-1 - j ;
		newArr[i] = arr[j] 
	}
	
	for (var i = 0; i<newArr.length; i++){					//in this stage we join the above array
		result += newArr[i] + ' '
	}
	return result ;
}