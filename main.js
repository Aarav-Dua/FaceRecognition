Webcam.set({
    height:380,
    width:680,
    image_format:'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach("#camera");
console.log("camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="captured_image">';

    })
}

console.log("ml5version=", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-_wvioSFx/", modelLoaded);

function modelLoaded(){

console.log("model is loaded and minecraft")
 
}