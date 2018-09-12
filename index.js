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

//let node = document.getElementsByClassName(".ranked-list").children.innerHTML;
//  let nextEl = node.children[i].inner.html;

function increaseRankBy(n) {
  const newRank = document
  for(var i = 0; i < newRank.length; i++){
    newRank = document.querySelectorAll(".ranked-list")[i].children[i].innerHTML;
    return parseInt(newRank) + n
}
}

//define a function deepestChild()
//it should pull the most deeply nested child from div#grand-node
function deepestChild() {
  let node = document.getElementById('grand-node'); //grab the top node
  let nextNode = node.children[0]; //get the first child of next node; set it to a variable

 	//here, use a while loop to check if nextNode is truthy; if it is, set node to nextNode and nextNode to the first child of node
 	while(nextNode) {
 	  node = nextNode;
 	  nextNode = node.children[0]
 	}
  return node; //once the while loop is done, return node. 
}