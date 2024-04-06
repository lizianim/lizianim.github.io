imgArray = [
    'media/frame_closeUp08.png',
    'media/frame_closeUp08_02.png'
]

//the number multiplied with random equals to the number of images in the array
window.onload = function(){
    var randomNum = Math.floor(Math.random() * 2);
    var randomImgSrc = document.getElementById("randImg").src = imgArray[randomNum];
}