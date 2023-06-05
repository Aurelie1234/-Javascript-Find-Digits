function findDigits(n) {
    // Write your code here


let str = n.toString(); 
let count = 0;


for (let i = 0 ; i < str.length ; i++){
  if ( n % str[i]  == 0 ){
      count++
  }
}
return count
}
