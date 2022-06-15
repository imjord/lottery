

ulEl = document.getElementById("list");

function start(){
    var userArray = [];
    var userNumber = prompt("Enter how many numbers you want to generate");
    
    var dash = "";
    
    if (userNumber > 8) {
    
    alert("Please enter a number less than 8");
    var userNumber = prompt("Enter how many numbers you want to generate");
        if (userNumber > 8) {
            alert("really bro");
        }
    }   

    for(var i = 0; i < userNumber; i++){
        userArray[i] = Math.floor(Math.random() * 100);
    }
    
    // display the userArray
    for(var i = 0; i < userArray.length; i++){
     
        if(i == 0){
            dash += userArray[i];
        } else {
            dash += "-" + userArray[i];
        }
    
    }
    buttonEl = document.querySelector("button").addEventListener('click', function(){
        var userArray = [];
        var dash = "";
        for(var i = 0; i < userNumber; i++){
            userArray[i] = Math.floor(Math.random() * 100);
        }
        
        // display the userArray
        for(var i = 0; i < userArray.length; i++){
         
            if(i == 0){
                dash += userArray[i];
            } else {
                dash += "-" + userArray[i];
            }
        
        }
        ulEl.textContent = dash;
    });
    ulEl.textContent = dash;
}


start();