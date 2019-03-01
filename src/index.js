// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

  let answer = {};
  
  if (currency > 10000){
    answer["error"]="You are rich, my friend! We don't have so much coins for exchange";
  }
  
 else{
   

     
   if(Math.ceil(currency/50) >0){
    answer["H"] = Math.ceil(currency/50);
   currency = currency%50;
  }
   
  if(Math.ceil(currency/25)>0){
    answer["Q"] = Math.round(currency/25);
    currency = currency%25;
  }
  
    if(Math.ceil(currency/10)>0){
    answer["D"] = Math.round(currency/10);
    currency = currency%10;
  }
  
    if(Math.ceil(currency/5)>0){
    answer["D"] = Math.round(currency/5);
    currency = currency%5;
  }
  
  if(currency>0){
    answer["P"] = currency;
  }
}
  
  return answer;
    // Your code goes here!
    // Return an object containing the minimum currencyber of coins needed to make change
}
