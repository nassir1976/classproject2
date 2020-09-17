'use strict'
function getName() 
    var userName = prompt("what is your name?");
    
    return document.Write('<h3>Hello' + userName +'!</h3>');
}

getName();