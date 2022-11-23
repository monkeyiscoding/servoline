var firebaseConfig = {
  apiKey: "AIzaSyDnvy-BysMpnQVS1uU8o0ym4MNFyD4N9Xw",
  authDomain: "servo-line.firebaseapp.com",
  databaseURL: "https://servo-line-default-rtdb.firebaseio.com",
  projectId: "servo-line",
  storageBucket: "servo-line.appspot.com",
  messagingSenderId: "622427776543",
  appId: "1:622427776543:web:7ccb3f53a0800a97fb972a",
  measurementId: "G-Q3Q9D4H471"
};

//window.location = "gameoverview.html";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var key = window.onload = localStorage.getItem("key").toString();


$("#error").css("display","none");


firebase.database().ref('products/' + key).on('value', (snap) => {
  var div = document.getElementById("right-div-top");
  var leftdiv = document.getElementById("left-div");
  var imagediv = document.getElementById("image-div");
  var bardiv = document.getElementById("thumbnail-div");
  var title = snap.val().title;
  var des = snap.val().des;
  var thumbnail = snap.val().thumbnail;

  div.innerHTML += `<h3 class="title">${title}</h3>
     <h4 class="des" style="color: grey; font-weight: 200;">${des}</h4>
     `
  imagediv.innerHTML = `<img class="thumbnail" src="${thumbnail}" alt="">`

  bardiv.innerHTML = `<img  onClick="myFunction(\`` + thumbnail + `\`)"  class="bar-images" src="${thumbnail}" alt="">`
});

var query2 = firebase.database().ref("products/" + key + "/features");


query2.once('value', function(snapshot) {
  snapshot.forEach(
    function(childSnapshot) {
      var div = document.getElementById("feature-div");
      var mytitle = childSnapshot.val().title;

      div.innerHTML += `      <div class="features-content-div">
    <i style ="color: #0066FF;" class="feature-icon fa-sharp fa-solid fa-check-to-slot"></i> <h4 class="features-text">${mytitle}</h4>
            </div>`

    }
  )

})


var query2 = firebase.database().ref("products/" + key + "/images");


query2.once('value', function(snapshot) {
  snapshot.forEach(
    function(childSnapshot) {
      var dive = document.getElementById("images-bar");
      var url = childSnapshot.val().url;

      dive.innerHTML += `<div onClick="myFunction(\`` + url + `\`)" class="images-bar-div">
      <img class="bar-images" src="${url}" alt="">
          </div>`






    }
  )

})

function myFunction(text) {
  var imagediv = document.getElementById("image-div");
  imagediv.innerHTML = `<img class="thumbnail" src="${text}" alt="">`
}



$("#back").click(function() {
  history.back();
})

var imageDiv = document.getElementById("image-div")
localStorage.setItem("enqurie", "jk")
$("#send-enqurie").click(function(event) {

  var enqurie = localStorage.getItem("enqurie");

  if (enqurie == "send") {
    $("#enqurie").css("display", "none");
    $("#sended").css("display", "block");;
  }
  $("#dialog").fadeIn();
})

$("#close").click(function(event) {

  $("#dialog").fadeOut();
})

$("#close-d").click(function(event) {

  $("#dialog").fadeOut();
})

$("#send-enqurie-button").click(function(event) {
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var message = $("#message").val();

  var errorText = $("#error");
  if(name.length < 1){
    errorText.html("Enter Name");
    errorText.fadeIn();
  }

  else if(!email.endsWith("@gmail.com")){
    errorText.html("Invalid Email Address");
    errorText.fadeIn();
  }

  else if(phone.length != 10){
    errorText.html("Invalid Phone Number");
    errorText.fadeIn();
  }

  else{

      // getting date
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      var today = mm + '/' + dd + '/' + yyyy;

      var d = new Date(); // for now


      var time = d.getHours()+":"+d.getMinutes();

      var myRef = firebase.database().ref().push();
      var key = myRef.key.toString();
      firebase.database().ref("enqurie/" + key).set({
        name: name,
        email: email,
        phone: phone,
        message: message,
        date: today,
        time: time,


      }, function(error) {
        if (error) {

        } else {
          $("#enqurie").css("display", "none");
          $("#sended").css("display", "block");
          localStorage.setItem("enqurie", "send");
        }
      })

  }


})

$("#contact-us").click(function(){
  $("#dialog-contact").fadeIn();
})


$("#close-contact").click(function(){
  $("#dialog-contact").fadeOut();
})
