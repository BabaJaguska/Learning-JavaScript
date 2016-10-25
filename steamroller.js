
function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  var novi=[];
  //posto ne smes globalnu promenljivu, trik je da u f-ji napravis f-ju!!
  
  function flatten(arr){
  var i;
 
  for(i=0;i<arr.length;i++){
    
    if(!Array.isArray(arr[i])){
      novi.push(arr[i]);
      
    }
    else {flatten(arr[i]);}
  }
  
  }
  
  flatten(arr); // ne zaboravi da je pozoves!!
  
  return novi;
}

steamrollArray([[["a"]], [["b"]]]);