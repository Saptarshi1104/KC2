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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() 
{
firebase.database().ref("/").on('value',
function(snapshot) 
{
document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function addRoom(){
room_name = document.getElementById("roomname").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirect(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}