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
var query = firebase.database().ref("top_products");


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

      // var title = childSnapshot.val().title;
      // var des = childSnapshot.val().description;
      // var price = childSnapshot.val().price;
      // var thumbnail = childSnapshot.val().thumbnail;
      //

      mydiv.innerHTML += `

      <div style="width: 200px;" class="bottom-product-card col-xl-3 col-lg-3">

        <img style="height: 70px; margin-left: auto; margin-right: auto; margin-bottom: 10px; margin-top: 30px;" src="images/sta.png" alt="">
        <h6 class="max-two-lines" style="font-family:bahnschrift;">V-Guard Effino</h6>
        <h6 class="max-two-lines" style="font-weight: 300; font-family:bahnschrift; font-size: 10px;">V-Guard Effino 1.3 TV Stabilizer for up to 82 cm (32") ...</h6>

        <button class="bottom-product-items" type="button" name="button">View</button>
      </div>




      `;



    }
  )

})
