// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseString(string){
	var outStr = '' ;									//we set an empty string
	var count = string.length-1 ;			//we set a counter at the last index of our input string
	var number = 1 ;									//and the number that follows every character at the output

	while(count >= 0){								//we r gonna loop from untill our counter equals 0 wish is the first index of our input string
		if(number === string.length){		//this control is for the last character of our input string so that we dont follow it with any number
			number = '' ;
		}
		outStr += string[count]+number ; 	//we add the charachter at our counter to the output string follower by a number, and since the couter starts from the last index -> down our output string will be reversed
		count -- ;
		number++ ;
	}

return outStr ;

}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(array){
	var outArr = [] ;

	for(var i = 0; i<array.length;i++){							//we loop our input array and check if the other elements have the same length as the selected element at every loop
		for (var j = i+1; j < array.length; j++){			// j = i+1 so we dont select the same element and compare it to itself
			if(array[i].length === array[j].length){		// the control
				outArr.push(array[i],array[j]);						//if our condition is true we push the two element to our output array
			}
		}
	}
	return outArr ;
}


