//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
// function isSubSet(array1, array2){
	
// 	array2.forEach(function(element, i){
// 		if(array1.indexOf(element) === -1){
// 			return false ;
// 		}
// 		else{
// 			return true
// 		}
// 	})

// }

function isSubSet(array1, array2){					
    var result = true ;											//we set the initial valur of the result to true
    for(var i = 0; i<array2.length; i++){		//we loop the second array
        if(array1.indexOf(array2[i])=== -1){		//now if we dont find that element in the first array our result well take false 
            result = result && false ;
        }
        else {															//now if the element exists in the first array our result will take true 
         result = result && true ;
         array1.splice(array1.indexOf(array2[i]),1);		//and we must delete that element from the first array, otherwise it can be duplicated and our function will keep returning true
    }  
  }
return result ;
}
