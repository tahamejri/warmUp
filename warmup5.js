// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function createClassmate(fullname, age,sexe, hobbies){				
	var mateObj={} ;													// creates a new object

	mateObj['fullName'] = fullname ;									//give that object some properties and affect them the value givven by the user
	mateObj['age'] = age ;
	mateObj['hobbies'] = hobbies ;
	mateObj['sexe'] = sexe ;
	return mateObj ;													// return the new created object
}
 var taha = createClassmate('taha', 28, 'male', 'music') ;						
 var fouz = createClassmate('fouz', 22, 'female', 'guitar') ;
 var amine = createClassmate('mohamed amin', 20, 'male', 'sports') ;

 var classArray = [taha, fouz, amine] ;

 function displayFriend (mate){																									//function that takes an object 
 	console.log('your mates fullname is ' + mate['fullName'] + ', aged ' + mate['age'] + ', and loves ' + mate['hobbies'])		//and display some usefull properties
 }


 function addFriend(mate){						
 	classArray.push(mate) ;					// we push the mate to the classmates array 

 	return classArray ;						// we return the updated array (classArray)
 }

var adam = createClassmate('adam momen', 21, 'male', 'learning') ;
addFriend(adam)



function numberOfMales(array){							
	return array.reduce(function(acc, element){			//for this one we can use reduce to calculate the number of males in our array
		if(element['sexe'] === 'male'){					// we check the property Sexe in each element of the array and we increment our acumilator
			acc++ ;
		}
		return acc ;
	},0)
}

function searchMates(array, query){					// needs more time :(
	return filter(array,function(element){
		return 
	})
}

