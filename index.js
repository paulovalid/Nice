let username;


document.getElementById("1").onclick = function() {
username = document.getElementById("text").value;
document.getElementById("h1").textContent = `Hello ${username}!`;
}