// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.

// 1 -


function gcd(num1,num2){
	var d = Math.min(num1,num2) ;			//we set d wich we ll use as a divisor, it takes the lowest value between num1 and num 2
	if(communDivisor(num1,num2,d)){			//our stop condition is that d is a commun divisor
		return d;							
	}
	;
	return gcd(num1-1,num2) ;				//we keep decreminting num 1 wich mean decrementing our devisor 
	

}


function communDivisor(n1,n2,d){			//this is a function that determine if a number (d) is a commun divisor for num1 and num 2
	if(n1%d === 0 && n2%d === 0){
		return true;
	}
	else{ 
		return false ; 
	}
}

// 2 -

function sum(num1,num2){
	if(num1===0){
		return num2;			//we return the value num2 when num1 reachs '0'
	}
	return 1 + sum(num1-1,num2)  // with each "iteration" we add '1' and decriment nem1 by 1, so at the end we get a total of '1+1+1... = num1' and at our stop condition we add it to num2
}  
=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
