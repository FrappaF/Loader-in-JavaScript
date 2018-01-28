//made by FrappaF
//libraries from p5.js


let people = 200;
let radius = 850;
let myDegrees;
var lines = [];
let turns = 10;
let t = 0;
let fps = 60;
let stop;
let secondDegrees;
let mainC;
let secondC;
let rndColor;

function setup() {
  mainC = color(255, 230, 0);
  secondC = color(0, 150, 150);

  createCanvas(windowWidth - 25, windowHeight - 25);

  if (width > height){
    radius = height - 20;
    people = floor((height * 200) / 920);
  }
  else{
    radius = width - 20;
    people = floor((width * 200) / 1895);
  }

  for(var i = 0; i < people; i++){
    lines.push(new Lines(mainC));
  }

  frameRate(fps);
  colorMode(RGB);



  stop = floor(random(2, 100));
  
}

function draw() {
  angleMode(DEGREES);
  background(255);
  translate(width / 2, height / 2);

  stroke(secondC);
  fill(secondC);
  ellipse(0, 0, radius, radius);

  for (var i = 0; i < lines.length; i++) {

      myDegrees = map(i, 0, lines.length, 0, 360);
      lines[i].set(cos(myDegrees) % (radius/2) * (radius/2), sin(myDegrees) % (radius/2) * (radius/2));

   }

   for(var k = 0; k < people; k++){
    
    strokeWeight(2);
    lines[t].show(lines[t].x, lines[t].y, lines[k].x, lines[k]. y);
   }

   noStroke();
   fill(secondC);
   secondDegrees = map(t, 0, people, 0, 360);
   //ellipse(cos(secondDegrees) % ((radius - 100) / 2) * (radius - 100) / 2, sin(secondDegrees)  % ((radius - 100) / 2) * (radius - 100) / 2, 100, 100);
   fill(secondC);
    //ellipse(cos(secondDegrees) % ((radius - (radius / 12)) / 2) * (radius - (radius / 12)) / 2, sin(secondDegrees)  % ((radius - (radius / 12)) / 2) * (radius - (radius / 12)) / 2, (radius / 12), (radius / 12));
  
  t++;
  
  t = t % people;


}

function windowResized() {
  noLoop();
  resizeCanvas(windowWidth - 25, windowHeight - 25);
  if (width > height){
    radius = height - 20;
    people = floor((height * 200) / 920);
  }
  else{
    radius = width - 20;
    people = floor((width * 200) / 1895);
  }
  lines.length = 0;
  for(var i = 0; i < people; i++){
    lines.push(new Lines(mainC));
  }
  loop();
}


