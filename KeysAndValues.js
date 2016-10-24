
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys=Object.keys(source);
  
  var lengthCollection=collection.length;
  var lengthKeys=keys.length;
  var moze;
  var prop=keys[0];
  var trenutniObjekat;
  
  for (i=0;i<lengthCollection;i++){
    moze=true;
    trenutniObjekat=collection[i];
    for (j=0;j<lengthKeys;j++){
      prop=keys[j];
      
      if (!trenutniObjekat.hasOwnProperty(prop)){
        moze=false;}
        else if (trenutniObjekat[prop]!==source[prop]){
          moze=false;}
          moze=moze && true;
    }
           
      if (moze){
        arr.push(collection[i]);
      }
      
  }
    

  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
