var firebaseConfig = {
  apiKey: "AIzaSyAxvOGvMmC9attWbnhNnUrg1ktWoIpToOU",
  authDomain: "letschat2-71e66.firebaseapp.com",
  databaseURL: "https://letschat2-71e66-default-rtdb.firebaseio.com",
  projectId: "letschat2-71e66",
  storageBucket: "letschat2-71e66.appspot.com",
  messagingSenderId: "804156956216",
  appId: "1:804156956216:web:dba6ea98d540ade572d0cd"
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

function about(){
window.location = "about.html";
}