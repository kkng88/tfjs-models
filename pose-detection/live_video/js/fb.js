
var config = {
  apiKey: "AIzaSyC9AKfxVZW00aMu1L8wu3bWrRct-F_ynwU",
  authDomain: "face-56ffd.firebaseapp.com",
  databaseURL: "https://face-56ffd.firebaseio.com",
  projectId: "face-56ffd",
  storageBucket: "face-56ffd.appspot.com",
  messagingSenderId: "77060230906"
};

firebase.initializeApp(config);
var storageRef = firebase.storage().ref();
var fdb = firebase.database();

function uploadimage(){
var canvas = document.getElementById("output2");
 canvas.toBlob(function(blob){
   var image = new Image();
   image.src = blob;
   console.log(blob)
   var uploadTask = storageRef.child('images/face/'+Date.now()+".jpg").put(blob);
   uploadTask.on('state_changed', function(snapshot) {
       console.log(snapshot);
   }, function(error) {
       console.log(error);
   }, function() {
       var downloadURL = uploadTask.snapshot.downloadURL;
       console.log(downloadURL);
   });
 });
}
