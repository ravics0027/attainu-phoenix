
// var result = console.log(Math.pow(2 ,15));

function powerSumOfDigits(num , power){
  
   var result = Math.pow(num , power);
    var sum = 0;
    var number = BigInt(result).toString().split('');
   var digit = number.map(Number);
    for(i = 0; i < digit.length ; i++){
      sum += digit[i];
    }
    return sum;
  }
  function main()
  {
      var result =console.log(powerSumOfDigits(2,1000));
      var result =console.log(powerSumOfDigits(2,15));
  }
  main();