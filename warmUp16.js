// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

//sorry it looks awefull but it works

function howManyBaloons (str){
	var arr = str.split('') ;
	var balarr = 'baloon'.split('') ;
	var baloonword = '' ;
	var count = 0 ;

	for(var i = 0; i<balarr.length; i++){
	arr.forEach(function(element,index){
		if(element === balarr[i]) {
			baloonword += arr.splice(index,1) ;
			if (baloonword === 'baloon'){
				count++ ;
				baloonword = '' ;
			}
		}

		}
		)
	}
var x = 0 ;

x = baloonword.length / 6 ;
if(x>=1){
return Math.floor(x) ;
}
else{
	return count ;
}
}

