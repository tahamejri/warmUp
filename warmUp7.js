// 1-using + operator combine your partner first and last name .

function fullName(first, last){
	var partnerName = '' ;
	
	partnerName = first + last ;
	return partnerName ;
}

// 2-find if the number 13 is a multiple of 3 or not.

if((13/3)!=0){
	console.log(true)
}



// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function averageAgee(){
var ageArray = [13,14,13,15,16,17,19,13,16,15] ;
var totalAge = ageArray.reduce(function(acc, element){
	acc+= element ;
	return acc ;
}
)
return totalAge/ageArray.length
}
// 4-calculate your age in seconds.
// your code is here

function ageInSeconds(age){
var myAge = age * 365 * 24 * 60 * 60 ;
return myAge ;
}
