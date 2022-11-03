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

  bardiv.innerHTML = `<img  onClick="myFunction(\``+ thumbnail+ `\`)"  class="bar-images" src="${thumbnail}" alt="">`
});

var query2 = firebase.database().ref("products/" + key + "/features");


query2.once('value', function(snapshot) {
  snapshot.forEach(
    function(childSnapshot) {
      var div = document.getElementById("feature-div");
      var mytitle = childSnapshot.val().title;

      div.innerHTML += `      <div class="features-content-div">
    <i style ="color: #0066FF;" class="fa-sharp fa-solid fa-check-to-slot"></i> <h4 class="features-text">${mytitle}</h4>
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

      dive.innerHTML += `<div onClick="myFunction(\``+ url+ `\`)" class="images-bar-div">
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
