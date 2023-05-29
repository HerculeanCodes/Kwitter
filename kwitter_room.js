//ADD YOUR FIREBASE LINKS HERE
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_names' id="+Room_names+"onclick='rederictToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
getData();
