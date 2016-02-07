function findLongestWord(str) {
  
  var arr=str.split(" ");
  var  l=arr.map(function(val){return val.length;}); //map ti je kao apply
  return l.reduce(function(prev,curr){if (curr>prev) return curr;  // reduce ti ide i gleda prethodni i trenutni pa radi sa ta dva
                                      return prev;});
}

findLongestWord("The quick brown fox jumped over the lazy dog");
