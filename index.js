function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++)
  emptyArray.push(musicians[i] + " plays " +instruments[i])
  return emptyArray
}


function johnLennonFacts(strings){
  
var emptyArray = [];
  for (var i = 0; i < strings.length; i++)
  emptyArray.push(strings[i] + "!!!" )
  return emptyArray
}


 function iLoveTheBeatles(array) {
    var emptyArray = [];
    
    do {
        emptyArray.push("I love the Beatles!");
        array++;
    }
    while (array < 15);
    return emptyArray
}