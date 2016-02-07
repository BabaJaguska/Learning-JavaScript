// I guess the point is here that there are functions str.toUpperCase() and str.toLowerCase()
// and that they have to have these brackets!
// though you probably should have first just put everything to lowercase and then only the 1st letter to uppercase.

function titleCase(str) {
  var words=str.split(" ");
  words=words.map(function(x){var temp=x.split("");
                        temp[0]=temp[0].toUpperCase();
                              for (i=1;i<temp.length;i++){
                                temp[i]=temp[i].toLowerCase();
                              }
                        return temp.join('');});
  return words.join(" ");
}

titleCase("I'm a little tea pot");
