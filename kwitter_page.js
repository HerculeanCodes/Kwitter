//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAy3rOwqIbTQx0rfXJxRLThgBaPYxIFTYw",
      authDomain: "classtest-642a5.firebaseapp.com",
      databaseURL: "https://classtest-642a5-default-rtdb.firebaseio.com",
      projectId: "classtest-642a5",
      storageBucket: "classtest-642a5.appspot.com",
      messagingSenderId: "866491891899",
      appId: "1:866491891899:web:68220e705f8d7b6d3c699e"
};
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name, message:msg, like:0});
      document.getElementById("msg").value = "";
}

function getData() 
{
       firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).ariaValueMax;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location.replace("kwitter.html");
}