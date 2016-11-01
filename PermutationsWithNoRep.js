// fCC assignment. Tough one!! Returns the number of possible permutations where no two same letters are adjacent. 
// (it otherwise considers two instances of the same letter as different entities, but that was in the assignment)
// it doesn't save the permutations, just increments the possible number 
// it's recursive
// when it finds 2 same letters adjacent it doesn't recursively call any more!!

function permAlone(str) {
  // convert it to array of characters
  
  var arr=str.split("");
  var nOfPerm=0;
  var previous="";
  
  if (arr.length==1) return 1;
  
 
  function permute(x,previous){
   
    var l=x.length;
             
    if (l==1 && x[0]!=previous) {
       nOfPerm++;  //if it's the last one  in the array you can increment the no of possible permutations 
       }
    
    else { for (var i=0;i<l;i++){
      // if not, keep permuting the rest of the array
      if (x[i]!=previous){
      permute((x.slice(0,i)).concat(x.slice(i+1)),x[i]);}
      
          }
         }
   return;
  }
  

  permute(arr,"");
 
  return nOfPerm;
}
