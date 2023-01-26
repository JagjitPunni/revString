//Get the values (string) from the page
//Controller function
function getValue(){
    document.getElementById('alert').classList.add('invisible');
    let userString = document.getElementById('userString').value;
    let revString = reverseString(userString);
    displayString(revString,userString);
}


//Reverse the string
//Logic function
function reverseString(userString){

    let revString = [];

    
    //reverse a string using a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
        
    }
    return revString;
}


//Display the reversed string to the user
//View function
function displayString(revString,userString){

    //write to the page
    document.getElementById('msg').innerHTML = `${revString} is the reverse of ${userString}.`;
    //show the alert box
    document.getElementById('alert').classList.remove('invisible');
    
}