/**
 * Created by Jacek on 2016-01-12.
 */
 var allButtons = document.getElementsByClassName("moveBtn");
 var stList = document.getElementById("list1");
 var ndList = document.getElementById("list2");

 console.log(allButtons);
 console.log(stList);
 console.log(ndList);

 function moveElement(event){
   console.log(event.target);
   console.log(event.currentTarget);

   var currentListId = this.parentElement.parentElement.id;
   var elemToMove = this.parentElement;
   var clonedElem = elemToMove.cloneNode(true);
   clonedElem.addEventListener("click",moveElement);
 //  console.log(currentListId);
   if (currentListId == "list1"){
     //console.log("This is first list element.",elemToMove);
     ndList.appendChild(clonedElem);
   }else{
   //  console.log("This is second list element.",elemToMove);
     stList.appendChild(clonedElem);
   }
   elemToMove.parentNode.removeChild(elemToMove);
 }

 for(var i=0;i<allButtons.length;i++){
   allButtons[i].addEventListener("click",moveElement);
