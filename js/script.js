
var listEl = document.getElementById('list');

var userNumber = prompt("how many number do you want to generate?");
var userArray = [];
var randomNumber = Math.floor(Math.random() * 100);


for(var x = 0; x < userNumber; x++){
    // put x in userArray
    userArray.push(x);
    // randomize userArray between 0 and 100
    console.log(userArray);

    // randomize each index of userArray
    for(var i = 0; i < userArray.length; i++){
        userArray[i] = Math.floor(Math.random() * 100);
       

    }

    var liEl = document.createElement('li');
    listEl.appendChild(liEl);
    userArray.push(x);
    var randomNumber = userArray[Math.floor(Math.random() * userArray.length)];3
    liEl.innerHTML = randomNumber;

}

