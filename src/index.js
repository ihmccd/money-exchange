// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

  let answer = {};

  if (currency > 10000){
    answer["error"]="You are rich, my friend! We don't have so much coins for exchange";
  }
  
  else if(currency/50-currency%50 >0){
    answer["H"] = Math.round(currency/50);
    currency = currency%50;
  }
   
  else if(currency/25-currency%25>0){
    answer["Q"] = Math.round(currency/50);
    currency = currency%25;
  }
  
  else if(currency/10-currency%10>0){
    answer["D"] = Math.round(currency/10);
    currency = currency%10;
  }
  
  else if(currency/5-currency%5>0){
    answer["D"] = Math.round(currency/5);
    currency = currency%5;
  }
  
  else if(currency>0){
    answer["P"] = currency;
  }
  
  return answer;
    // Your code goes here!
    // Return an object containing the minimum currencyber of coins needed to make change
}
