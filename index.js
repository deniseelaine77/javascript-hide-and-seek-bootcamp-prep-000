function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
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

// function increaseRankBy(n) {
//   const newRank = document
//   for(var i = 0; i < newRank.length; i++){
//     document.querySelectorAll(".ranked-list")[i].children[i].innerHTML;
//     return parseInt(newRank) + n
// }
// }

//      children[j].innerHTML = children[j].innerHTML += n;

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list'); //grab all the ranked lists

  for (let i = 0, l = rankedLists.length; i < l; i++) { //use a for loop to grab all of the children
    let children = rankedLists[i].children;

    //the tricky part; now for every child above, loop over all of the elements and change the innerHTML, using another for loop
    for (let j = 0, k = children.length; j < k; j++){
      let newRank = parseInt(children[j].innerHTML); 
      return newRank[j] += n
    }
}
}