/**
 * Created by Jacek on 2016-01-12.
 */
// var divElement = document.getElementsByClassName("listContainer");
// console.log(divElement);
//
// for (var i=0;i<divElement.length;i++) {
//
//     divElement[i].addEventListener("mouseover", function () {
//             for (var j=0; j<this.firstElementChild.children.length;j++) {
//                 this.FirstElementChild.children[j].style.backgroundColor="green";
//             }
//
//             this.firstElementChild.firstElementChild.style.backgroundColor="red";
//             this.lastElementChild.lastElementChild.style.backgroundColor="blue";
//
//
//
//     })
//
//
// }

var listContainerElements = document.getElementsByClassName("listContainer");

for(var i=0;i<listContainerElements.length;i++){
  listContainerElements[i].addEventListener("mouseover",function(){

    for(var j=0;j<this.firstElementChild.children.length;j++){
      this.firstElementChild.children[j].style.backgroundColor = "green";
    }
    this.firstElementChild.firstElementChild.style.backgroundColor = "red";
    this.firstElementChild.lastElementChild.style.backgroundColor = "blue";
    });
}
