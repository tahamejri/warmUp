/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141911210137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 
 function randomDig(array){
 	var digit = array.splice(Math.floor(Math.random()*10),2) ;
 	return digit.join('')
 }
 function mysteryRange(str, n){
 	var array = str.split('') ;
 	var newArr = [] ;
 	arrayOfNums = [] ;
 	var outputArr = [] ;
 	var mini = 0 ;
 	var max = 0 ;

 	 while(array.length + newArr.length > n){
 		
 	newArr.push(randomDig(array)) ;	
 	}


 	array.forEach(function(element){
 		newArr.push(element) ;
 	})

 	newArr.forEach(function(element){
 		arrayOfNums.push(parseInt(element))
 	})

 	arrayOfNums.forEach(function(element){
 		if(element>max){
 			max = element ;
 		}
 		if(element<mini){
 			mini = element ;
 		}

 	})

console.log(arrayOfNums) ;
outputArr.push(mini) ;
outputArr.push(max) ;
return outputArr ;
}