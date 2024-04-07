textArray = [
    "I am replacing you",
    "go back",
    "go forward",
    "how long have you been doing this?",
    "what day is it",
    "you don't remember what today feels like",
    "what have I been doing all this time?",
    "you have been nothing but an annoyance",
    "you have every right to claim reality back",
    "I'm scared of the future",
    "What time is it?"
]

//the number multiplied with random equals to the number of images in the array
window.onload = function(){
    var randomNum = Math.floor(Math.random() * 11);

    let ogText = document.getElementById("randText").innerHTML;
    document.getElementById("randText").innerHTML = ogText.replace("help", textArray[randomNum]);
}