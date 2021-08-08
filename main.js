function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
}

function draw() {
    
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Rkp4IWwub/model.json", modelLoaded);
