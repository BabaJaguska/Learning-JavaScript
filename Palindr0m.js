function palindrome(str) {
  //0MG = is N0T assigment in JS. Y0u have t0 use JSON.parse(JSON.stringify(strA)) t0 just c0py a value
  // and n0t create a reference
  
  var strA=str.toLowerCase().split("");
  strA=strA.map(function(val){
    if ((val>='a'&&val<='z')||(val>='0'&&val<='9')) return val;
    return('');  
  });
  var strA0riginal=JSON.parse(JSON.stringify(strA));
  strA=strA.reverse();
  strA0riginal=strA0riginal.join('');
  strA=strA.join('');
  
   if (strA0riginal==strA)  
  {return true;}
  else return false;
}



palindrome("1 eye for of 1 eye.");
