var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    if(content=="selfie"){
        speak();
    }
}

Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

Webcam.attach("#camera");

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id="selfie1";
        take_snapshort();
        speak_data="taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000);

    setTimeout(function(){
        img_id="selfie2";
        take_snapshort();
        speak_data="taking your next selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },10000);

    setTimeout(function(){
        img_id="selfie3";
        take_snapshort();
            },15000);
}

function take_snapshort()
{
    console.log(img_id);

    Webcam.snap(function(data_url){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_url+'"/>';
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_url+'"/>';
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_url+'"/>';
        }
    });
}
   


