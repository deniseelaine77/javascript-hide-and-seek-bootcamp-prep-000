function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

// function increaseRankBy(n){
//   //document.querySelectorAll(".ranked-list")[0].children[0].innerHTML += 1
//   var children = 
//   document.getElementsByClassName(".ranked-list).children.innerHTML;
//   // for(i = 0; i< children.length; i++){
//   // parseInt(innerHTML) += n;
//   // }
// }

//define a function deepestChild()
//it should pull the most deeply nested child from div#grand-node
function deepestChild(){
  var list = document.getElementById("grand-node");
for (var i = 0; i < list.length; i++) {
    querySelectorAll()
    return list[i].innerHTML; 
}
}