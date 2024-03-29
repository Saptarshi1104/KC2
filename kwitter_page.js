var firebaseConfig = {
  apiKey: "AIzaSyBr4AdZ5HbJclFrzMmtI7q4NfXXmcvT7eM",
  authDomain: "letschat422.firebaseapp.com",
  databaseURL: "https://letschat422-default-rtdb.firebaseio.com",
  projectId: "letschat422",
  storageBucket: "letschat422.appspot.com",
  messagingSenderId: "27168569728",
  appId: "1:27168569728:web:b10bfbe9cc3e2131f7a965"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name: user_name,
    message: message,
    like: 0
    });
    document.getElementById("msg").value = "";
    console.log(message);
    window.scrollTo(0, document.querySelector("body").scrollHeight);
  }

  function getData() 
  { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) 
    { childKey  = childSnapshot.key; 
      childData = childSnapshot.val(); 
      if(childKey != "purpose") 
      {
    firebase_message_id = childKey;
    message_data = childData;
    //start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
        //end code
  }});});}
  getData();
  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }

  function updateLike(message_id){
    console.log("Clicked on Like Button- " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes
    });
    }

function back(){
  window.location = "kwitter_room.html";
}