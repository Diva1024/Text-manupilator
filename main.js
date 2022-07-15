var leftwx=0;
var rightwx=0;
var dif=0;



function preload(){

}



function setup(){
canvas= createCanvas(600,480);
canvas.position(800,150);
video=createCapture(VIDEO);
video.size(600,500);
poseNet=ml5.poseNet(video,modelloaded());
poseNet.on("pose",gotPoses);

}




function draw(){
background("#5a46db");
fill("#f22e73");
textSize(dif);
text('Diva', 200, 150);
}
function modelloaded(){
    console.log("PoseNet is loaded");

}
function gotPoses(results){
if(results.length>0){
console.log(results);
leftwx=results[0].pose.leftWrist.x;
rightwx=results[0].pose.rightWrist.x;
dif=floor(leftwx-rightwx);
console.log("left wrist= "+leftwx, "right wrist= "+rightwx, "difference= "+dif);
}

}
