/**
 * Created by Jacek on 2016-01-12.
 */
var removeButton = document.getElementById('remove');
removeButton.addEventListener("click", function (){

    removeButton.parentNode.removeChild(removeButton);
});
// krócej :
// document.getElementById("remove").addEventListener("click",function(){
  // this.parentNode.removeChild(this);
// });
