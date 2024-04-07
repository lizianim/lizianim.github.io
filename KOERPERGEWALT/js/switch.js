///i stuggled so hard for nothing. I have NO FUCKING CLUE WHY THIS WORKS, but slay.
//I FUCKING DID IT: FUCK YOU JAVASCRIPT
count = 0;
counter();

function counter() {


    //getting a counter from the url hash
    var _hash = window.location.hash;
    if( _hash ){
    count = parseInt( window.location.hash.replace("#", ""));
    count += 1;
    window.location.hash= count;


    }else{

        window.location.hash = "0";
    }

    document.getElementById("counter").innerHTML = window.location.hash;
}

