module.exports = function check(str, bracketsConfig) {
   const items = bracketsConfig.map((arr)  => arr.join(''));
   let length1 = 0;
    
  
   do {
         length1 = str.length;
         items.forEach((x )=> str = str.replace(x,''));

     } 
     while (length1 != str.length)
     return !str.length;
}
