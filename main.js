function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('model is loaded');
}

function draw(){
    background('#8a8a91');
}

function gotPoses(Result){
    if(Result.length>0){
        console.log(Result);
    }
}