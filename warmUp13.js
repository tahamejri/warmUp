/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21
        Help:
        MCMXC" (1000 = M, 900 = CM, 90 = XC)

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    */

    function romanToDec(str){
   	var roman = {   'I':  1 ,
     'V': 5 ,
     'X': 10 ,
     'L': 50,
     'C': 100 ,
     'D': 500 ,
     'M': 1000
 }
    var decomposed = str.split('') ;
    var result = 0
    for(var i = 0; i<decomposed.length; i++){
    	if(roman[decompose[i]]<roman[decompose[i+1]]){
      	result += roman[decompose[i+1]] - roman[decompose[i]] ;
        	i++;
        }
        else{ 
          result += roman[decompose[i]]
        }
    }
    return result ; 
    }
    

    /*
    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    

    */
    function toCamelCase(str){
    	if(str.indexOf('-') !== -1 ){
    		var array= str.split('-') ;
    	}
    	if(str.indexOf('_') !== -1 ){
    		var array= str.split('_') ;
    	}


    	return array.map(function(element){

    		 var elemArr = element.split('') ;
    		 var first = elemArr[0] ;
    		 elemArr.splice(0, 1) ;
    		 elemArr.unshift(first.toUpperCase());
    		 element = elemArr.join('') ;
   			
    		 return element
    	})
    	 
    }


    /*
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(arr){
	return arr.filter(function(element){
		return Number.isInteger(element) ;
	})
}