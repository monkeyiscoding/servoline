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
var query = firebase.database().ref("category_products");

query.once('value', function(snapshot) {
  snapshot.forEach(
    function(childSnapshot) {
      var mydiv = document.getElementById("main-content");

      var id = childSnapshot.val().id;
      var title = childSnapshot.val().title;
      var key = childSnapshot.val().key;


      mydiv.innerHTML += `
      <div style=" margin-top: 30px; justify-content: center; align-items: center; text-align: center;" id="${id}"class="category-div row col-xl-12 col-xxl-12">

        <h3 style="margin-bottom: 20px;">${title}</h3>
          <hr>

      </div>`

      var query2 = firebase.database().ref("category_products/" + id + "/products");


      query2.once('value', function(snapshot) {
        snapshot.forEach(
          function(childSnapshot) {


            var mydiv2 = document.getElementById(id);
            var title = childSnapshot.val().title;
            var thumbnail = childSnapshot.val().thumbnail;
            var des = childSnapshot.val().des;
            var key = childSnapshot.val().id;

            mydiv2.innerHTML += `

              <div style="margin-left: 30px; margin-top: 20px; text-align: center; width: 220px; height: auto; min-height: 300px;" class="bottom-product-card col-md-4 col-xl-3 col-lg-3">

                <img style="height: 90px; margin-left: auto; margin-right: auto; margin-bottom: 10px; margin-top: 30px;" src="${thumbnail}" alt="">
                <h6 class="max-two-lines" style="font-family:bahnschrift;">${title}</h6>
                <h6 class="max-two-lines-2" style="font-weight: 300; font-family:bahnschrift;">${des}</h6>

                <button class="bottom-product-items" type="button" name="button"  onClick="myFunction(\``+ key + `\`)">View</button>
              </div>`;




          }
        )

      })



    }
  )

})


function myFunction(text){
  localStorage.setItem("key",text);
  window.location = "productoverview.html";
}
