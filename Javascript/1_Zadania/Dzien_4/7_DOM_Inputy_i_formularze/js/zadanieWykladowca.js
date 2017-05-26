/**
 * Created by Jacek on 2016-01-12.
 */

var submitButton = document.querySelector("button");
var errorMessage = document.querySelector(".error-message");

var inputEmail = document.getElementById("email");
var inputName = document.getElementById("name");
var inputSurname = document.getElementById("surname");
var inputPass1 = document.getElementById("pass1");
var inputPass2 = document.getElementById("pass2");

var agree = document.getElementById("agree");

var messageArray = [];
submitButton.addEventListener("click",function(e){
  if(inputEmail.value.indexOf("@")==-1){
    messageArray.push("<p>Email musi posiadać znak @</p>");
  }
  if(inputName.value.length<6){
    messageArray.push("<p>Twoje imię jest za krótkie</p>");
  }
  if(inputSurname.value.length<6){
    messageArray.push("<p>Twoje nazwisko jest za krótkie</p>");
  }
  if((inputPass1.value!==inputPass2.value)||((inputPass2.value.length || inputPass1.value.length)==0)){
    messageArray.push("<p>Hasła nie są takie same lub puste</p>");
  }
  if(((inputPass2.value.length || inputPass1.value.length)<6)){
    messageArray.push("<p>Hasła są za krótkie</p>");
  }
  if(inputPass1.value.search(/[A-Z]/) == -1){
    messageArray.push("<p>Hasła nie zawierają wielkich liter</p>");
  }
  if(inputPass1.value.search(/[0-9]/) == -1){
    messageArray.push("<p>Hasła nie zawierają liczb</p>");
  }
  if(agree.checked==false){
    messageArray.push("<p>Musisz zaakceptować warunki</p>");
  }
  if(messageArray.length >0){
      e.preventDefault();
      for(var i = 0; i<messageArray.length;i++){
        errorMessage.innerHTML += messageArray[i];
      }
      console.log("Wyswietlilem info o bledach");
  }else{
    console.log("Wysylam na serwer.");
  }

});
