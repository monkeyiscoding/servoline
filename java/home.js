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
firebase.initializeApp(firebaseConfig);
var query = firebase.database().ref("top_products");


firebase.database().ref('IntroBox/').on('value', (snap) => {
  var title = snap.val().title;
  var des = snap.val().des;
  var thumbnail = snap.val().thumbnail;

  $("#intro-title").html(title);
  $("#intro-description").html(des);

  $("#thumb").html(`<img style="height: 180px; margin-left: 180px; border-radius: 20px;" src="${thumbnail}" alt="">`)

});

//window.location = "gameoverview.html";

// Initialize Firebase


var myRef = firebase.database().ref().push();
var key = myRef.key;

// firebase.database().ref("top_products/" + key).set({
//     title: "title",
//   }, function(error) {
//     if (error) {
//
//     } else {
//
//     }
//   })


// getting top Products

query.once('value', function(snapshot) {
  snapshot.forEach(
    function(childSnapshot) {
      var mydiv = document.getElementById("top-products");

      var title = childSnapshot.val().title;
      var des = childSnapshot.val().description;
      var key = childSnapshot.val().id;
      var thumbnail = childSnapshot.val().thumbnail;


      mydiv.innerHTML += `

      <div style="border-radius: 10px;" class="bottom-product-card col-md-4 col-xl-3 col-lg-3">

        <img style="border-radius: 5px;height: 90px; margin-left: auto; margin-right: auto; margin-bottom: 10px; margin-top: 30px;" src="${thumbnail}" alt="">
        <h6 class="max-two-lines" style="font-family:bahnschrift;">${title}</h6>
        <h6 class="max-two-lines-2" style="font-weight: 300; font-family:bahnschrift;">${des}</h6>

        <button onClick="myFunction(\``+ key + `\`)" class="bottom-product-items" type="button" name="button">View</button>
      </div>




      `;



    }
  )

})


$("#login").click(function(event){
  window.location = "login/login.html"
})

function myFunction(text){
  localStorage.setItem("key",text);
  window.location = "productoverview.html";
}
