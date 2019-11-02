/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  // YOUR CODE HERE
  
  var lowestPriceDay ;
  var highestPriceForsail = 0;
  var sellingDay ;
  var maxProfit = 0 ;
  var minimumPrice = Math.min(...prices)

 //first thing we will look for the lowers price and it's day
  prices.forEach(function(element, i){
  	if(element === minimumPrice){
  		lowestPriceDay = i ;
  	}
  })

  //now, first we inisialise the highest price for sale as the minimum price we just found,
  highestPriceForsail = minimumPrice ;
  //starting from that day we will look for a day where the price is the highest
  
  for(var i = lowestPriceDay; i<prices.length; i++){
	//whenever we find a day where the price is higher we check if its the highest or no. if true we set the hiest price to sell to the value at that day
  	if(prices[i] > highestPriceForsail){
  		sellingDay = i;
  		highestPriceForsail = prices[i] ;
  	}
  }
  //at the end, we have the day where the price is the lowest, we looked for the days that comes after it and if the price gets higher,
  //we looked for the highest price after the day we baught, and we return the maimum profit we can earn.
 
  return highestPriceForsail - minimumPrice
};
