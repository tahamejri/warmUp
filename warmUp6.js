 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 function mult(n) {
 	var result = 1 ;					// our result will start from 1 cs we have a multiplication
 	for(var i = 1; i<=n; i++){			//starting from 1 we increment by 1 till we reach (n) we multiplicate each time
 		result*= i ;
 	}
 	return result ;
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

function string1ToN(num){
	var count = 2 ;				//we set our counter at 2
	var outStr = '1' ;			//the output string will have the value '1' at the beginning
	while(count<=num){				
		outStr += ' ' +count +' '+count ; 	//looping with a while loop from 2 to n we construct our output string
		count++ ;							//and we increment our counter
	}
	return outStr ;
}