function addUser(){
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
if(user_name != ""){
    window.location = "kwitter_room.html";
    document.getElementById("error_msg").innerHTML = "";
}else{
    document.getElementById("error_msg").innerHTML = "Error: Please enter a valid username!"
}
}

function about(){
window.location = "about.html";
}

function cu(){
    window.location = "cu.html";
}