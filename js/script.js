var userNumber = prompt("Enter how many numbers you want to generate");
var userArray = [];

for(var i = 0; i < userNumber; i++){
    userArray[i] = Math.floor(Math.random() * 100);
}
