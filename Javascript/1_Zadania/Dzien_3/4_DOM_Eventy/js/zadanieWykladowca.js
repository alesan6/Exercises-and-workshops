var  parentElements = document.querySelectorAll(".parent");
console.log(parentElements);

for (var i=0;i<parentElements.length;i++){
    parentElements[i].addEventListener("mouseover",function(){
        this.children[0].style.display = "block"; //this - ten konkretny DIV
});
//     parentElements[i].addEventListener("mouseout",function(){
//         this.children[0].style.display = "none";
// });
 parentElements[i].addEventListener("mouseout",hideChildrenElement);
 function hideChildrenElement(){
     this.children[0].style.display = "none";
 }

}
// poniżej w pętli tylko eventy. działa bo jest this.
// var parentElements = document.querySelectorAll(".parent");
// console.log(parentElements);
//
//   for(var i =0;i<parentElements.length;i++){
//     function showChildrenElements(){
//         this.children[0].style.display = "block";
//     }
//     function hideChildrenElement(){
//            this.children[0].style.display = "none";
//     }
//     parentElements[i].addEventListener("mouseover",showChildrenElements);
//     parentElements[i].addEventListener("mouseout", hideChildrenElement);
//   }
