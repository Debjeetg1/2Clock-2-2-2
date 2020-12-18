//TODO

// addButtons
// stopWatch
// Timer
// Calculator

var sc , hr , mn , ml;
var state = 0;
var theme1Button;
var day
let sound;
var tick
var slider
var number


function preload()
{

 sound = loadSound("SOUND4.MP3");
 tick = loadSound("song.mp3")

}
function setup()
{

 sc = second();
if(sc % 1 === 0)
{
  tick.play();
  tick.loop();




}

  

  
  
 
  createCanvas(displayWidth , displayHeight);
 database = firebase.database();
 slider = createSlider(0 , 100 , 50)


 angleMode(DEGREES);

  theme1Button = createButton('THEME-1')
 theme1Button.position(displayWidth - displayWidth/2 - displayWidth/2, 
  displayHeight - displayHeight / 2 - displayHeight/2 + displayHeight/4) ;

  theme1Button.style('width' , '130px')
  theme1Button.style('height' , '30px')
  theme1Button.style('background-color' , rgb(25 , 255 , 255))


 
 theme1Button.mousePressed(update1)

 theme2Button = createButton('THEME-2')
 theme2Button.position(displayWidth - displayWidth/2 - displayWidth/2, 
  displayHeight - displayHeight / 2 - displayHeight/2 + displayHeight/3) ;

  theme2Button.style('width' , '130px')
  theme2Button.style('height' , '30px')
  theme2Button.style('background-color' , rgb(225 , 155 , 55))

 
 
 theme2Button.mousePressed(update2)

 theme3Button = createButton('THEME-3')
 theme3Button.position(displayWidth - displayWidth/2 - displayWidth/2, 
  displayHeight - displayHeight / 2 - displayHeight/2 + displayHeight/2.4) ;

  theme3Button.style('width' , '130px')
  theme3Button.style('height' , '30px')
  theme3Button.style('background-color' , rgb(145 , 155 , 55))

 
 
 theme3Button.mousePressed(update3)

 theme4Button = createButton('THEME-4')
 theme4Button.position(displayWidth - displayWidth/2 - displayWidth/2, 
  displayHeight - displayHeight / 2 - displayHeight/2 + displayHeight/1.98) ;

  theme4Button.style('width' , '130px')
  theme4Button.style('height' , '30px')
  theme4Button.style('background-color' , rgb(250 , 155 , 105))

 
 
 theme4Button.mousePressed(update4)

 calculaterButton = createButton("CALCULATER")
 calculaterButton.position(displayWidth - displayWidth/2 - displayWidth/2, 
  displayHeight - displayHeight / 2 - displayHeight/2 + displayHeight/1.98) ;

  theme4Button.style('width' , '130px')
  theme4Button.style('height' , '30px')
  theme4Button.style('background-color' , rgb(250 , 155 , 105))




var stateRef = database.ref("state");
stateRef.on("value" , readState);

}

function draw()
{
  background(0 , 0 , 0)

  slider.position(displayWidth - displayWidth/2 - displayWidth/2, 
    displayHeight - displayHeight / 2 - displayHeight/2 + displayHeight/1.3 )  

  tick.setVolume(slider.value());


  sc = second();
  hr = hour()%12  ;
   mn = minute();

   

  dy = day();
  m = month();
  y = year();
  




  let scAngle = map(sc ,  0 ,60 , 0 , 360);
 

  let mnAngle = map(mn , 0 , 60 , 0 , 360);
  
  let hrAngle = map(hr % 12, 0 , 60 , 0 , 360);



if(state === 2)
{
  theme2();
}
 

  if(state === 1)
  {
    theme1();
    
  }

  if(state === 3)
  {
    theme3();
  }

  if(state === 4)
  {
    theme4();
  }

 
  }

function theme1()
{
       
 fill(100 , 100 , 255);
 strokeWeight(150)
 textSize(50);
 text(nf( hr,2 ) , displayWidth - displayWidth/1.75 , displayHeight - displayHeight/2.7  );
 text(" :" , displayWidth - displayWidth/1.85 , displayHeight - displayHeight/2.7  );
 

 fill(100 , 255 , 100);
 strokeWeight(150)
 textSize(50);
 text(nf(mn,2 ) , displayWidth - displayWidth/1.93 , displayHeight - displayHeight/2.7 )
 text(" :" ,  displayWidth - displayWidth/2.05 , displayHeight - displayHeight/2.7 );

 fill(255 , 100 , 100);
 strokeWeight(150)
 textSize(50);
 text(nf(sc , 2) ,displayWidth - displayWidth/2.15 , displayHeight - displayHeight/2.7 )





 translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.8) 
 rotate(270)

 
  strokeWeight(20)
  stroke(255 ,100 , 100);
  noFill();



  let scAngle = map(sc ,  0 ,60 , 0 , 360);
  arc(0,0, 550 ,550 ,  0 , scAngle );



  let mnAngle = map(mn , 0 , 60 , 0 , 360);
  stroke(100 , 255 , 100);
  arc(0,0 , 500 ,500,  0 , mnAngle)

  let hrAngle = map(hr % 12 , 0 , 12 , 0 , 360);
  stroke(100 , 100 , 255);
  arc(0,0, 450 , 450, 0 , hrAngle)




 push();
  strokeWeight(3);
  stroke(255 ,100 , 100)
  rotate(scAngle);
  line(0 , 0 , 180 ,0);
 
 pop();

 push();
 strokeWeight(6);
 stroke(100 ,255, 100)
 rotate(mnAngle);
 line(0 , 0 , 140 ,0);

pop();

push();
strokeWeight(10);
stroke(100 ,100 , 255)
rotate(hrAngle);
line(0 , 0 , 100 ,0);

pop();

 





}

function theme2()
{
  background(0 , 0 , 0)

 

number = hr % 12

fill(255 ,100 , 100 );
//hr
strokeWeight(30);
textSize(250);
text(nf(hr,2) , displayWidth - displayWidth/2 - displayWidth/3 , 
displayHeight - displayHeight/2 + displayHeight/5);

text(" :" , displayWidth - displayWidth/2 - displayWidth/3 + displayWidth/8,
displayHeight - displayHeight/2+ displayHeight/5)

fill(100 ,255 , 100 )
strokeWeight(30);
textSize(250);
text(nf(mn,2) , displayWidth - displayWidth/2 - displayWidth/3 + displayWidth / 5, 
displayHeight - displayHeight/2+ displayHeight/5);

text(" :" , displayWidth - displayWidth/2 - displayWidth/3 + displayWidth/3.2,
displayHeight - displayHeight/2+ displayHeight/5)

fill(100 ,100 , 200)
strokeWeight(30);
textSize(250);
text(nf(sc,2) , displayWidth - displayWidth/2 - displayWidth/3 + displayWidth / 2.6, 
displayHeight - displayHeight/2+ displayHeight/5);



fill(55 ,155 , 255)
strokeWeight(30);
textSize(150);
text(nf("/" + dy,2) , displayWidth - displayWidth/2 - displayWidth/3 + displayWidth / 6, 
displayHeight - displayHeight/2 - displayHeight/7);

text(nf( m,2) , displayWidth - displayWidth/2 - displayWidth/3.5 , 
displayHeight - displayHeight/2 - displayHeight/7);

text(nf( "/" + y,2) , displayWidth - displayWidth/2 + displayWidth/15 - displayWidth/10, 
displayHeight - displayHeight/2 - displayHeight/7);

console.log(hr)


if(hr < 12 )
{
  fill(255, 5 , 5)
  text("PM" , displayWidth - displayWidth/2 - displayWidth/3 + displayWidth / 1.8, 
  displayHeight - displayHeight/2+ displayHeight/5);
}
 if(hr % 12 > 12 || hr === 0 )
 {
  fill(255, 5 , 5)
  text("AM" , displayWidth - displayWidth/2 - displayWidth/3 + displayWidth / 1.8, 
  displayHeight - displayHeight/2+ displayHeight/5);
 }





 
theme1Button.mousePressed(update1)
}

function theme3()
{
  background("#68a4ff");

  let scAngle2 = map(sc , 0 , 60 , -90 , 270)
  let mnAngle2 = map(mn , 0 , 60 ,-90 , 270);
  let hrAngle2 = map(hr % 12 , 0 , 12 ,-90, 270);



  push();
  fill(255)
  translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.81)
  rotate(scAngle2 )
  strokeWeight(3)
  stroke("white")
  line( 0 , 0 , 280 , 0)
  pop()

  push();
  fill(255)
  translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.81)
  rotate(mnAngle2 )
  strokeWeight(6)
  stroke("white")
  line( 0 , 0 , 240 , 0)

  pop();

  push();
  fill(255)
  translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.81)
  rotate(hrAngle2 )
  strokeWeight(8)
  stroke("white")
  line( 0 , 0 , 200 , 0)

  pop();



  push();
  fill(255)
  strokeWeight(2)
  textSize(25 );
  stroke("white")
  text("XII" , displayWidth - displayWidth/1.98 , displayHeight - displayHeight/1.17)
  pop();

  push();
  fill(255)
  strokeWeight(2)
  textSize(25);
  stroke("white")
  text("VI" , displayWidth - displayWidth/1.98 , displayHeight - displayHeight/4)
  pop();

  push();
  fill(255)
  strokeWeight(2)
  textSize(25);
  stroke("white")
  text("III" , displayWidth - displayWidth/3 , displayHeight - displayHeight/1.9)
  pop();

  push();
  fill(255)
  strokeWeight(2)
  textSize(25);
  stroke("white")
  text("IX" , displayWidth - displayWidth/1.48 , displayHeight - displayHeight/1.9)
  pop();

  push();
  fill(255)
  strokeWeight(2)
  textSize(25 );
  stroke("white")
  text("I" , displayWidth - displayWidth/2.45 , displayHeight - displayHeight/1.25)
  pop();


  push();
  fill(255)
  strokeWeight(2)
  textSize(25 );
  stroke("white")
  text("II" , displayWidth - displayWidth/2.9 , displayHeight - displayHeight/1.51 )
  pop();

  push();
  fill(255)
  strokeWeight(2)
  textSize(25 );
  stroke("white")
  text("IV" , displayWidth - displayWidth/2.8 , displayHeight - displayHeight/2.6)
  pop();

  push();
  fill(255)
  strokeWeight(2)
  textSize(25 );
  stroke("white")
  text("V" , displayWidth - displayWidth/2.39 , displayHeight - displayHeight/3.6)
  pop();
  
  push();
  fill(255)
  strokeWeight(2)
  textSize(25 );
  stroke("white")
  text("VII" , displayWidth - displayWidth/1.7 , displayHeight - displayHeight/3.6)
  pop();

  push();
  fill(255)
  strokeWeight(2)
  textSize(25 );
  stroke("white")
  text("VIII" , displayWidth - displayWidth/1.55 , displayHeight - displayHeight/2.7)
  pop();

  push();
  fill(255)
  strokeWeight(2)
  textSize(25 );
  stroke("white")
  text("X" , displayWidth - displayWidth/1.5 , displayHeight - displayHeight/1.51)
  pop();

  push();
  fill(255)
  strokeWeight(2)
  textSize(25 );
  stroke("white")
  text("XI" , displayWidth - displayWidth/1.69 , displayHeight - displayHeight/1.25)
  pop();


  translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.8)


  noFill();
  stroke("#599bff");
  strokeWeight(20)
  arc(0 , 0 ,625 , 625 ,0 , 180)

  noFill();
  stroke("#599bff");
  strokeWeight(14)
  arc(0 , 0 ,630 , 630 ,180 , 0)

  noFill();
  stroke(255, 255  ,255);
  strokeWeight(15)
  ellipse( 0 , 0 , 600 ,600)

  
  stroke(239 , 239 ,239);
  strokeWeight(15)
  ellipse( 0 , 0 , 615 ,615)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

theme1Button.mousePressed(update1)

 }

 function theme4()
{
  background(255);

  let scAngle2 = map(sc , 0 , 60 , -90 , 270)
  let mnAngle2 = map(mn , 0 , 60 ,-90 , 270);
  let hrAngle2 = map(hr % 12 , 0 , 60 ,-90, 270);



  push();
  fill(0)
  translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.81)
  rotate(scAngle2 )
  strokeWeight(3)

  line( 0 , 0 , 280 , 0)
  pop()

  push();
  fill(0)
  translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.81)
  rotate(mnAngle2 )
  strokeWeight(6)
 
  line( 0 , 0 , 240 , 0)

  pop();

  push();
  fill(0)
  translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.81)
  rotate(hrAngle2 )
  strokeWeight(8)

  line( 0 , 0 , 200 , 0)

  pop();



  push();
  fill(0)
  strokeWeight(2)
  textSize(25 );

  text(12 , displayWidth - displayWidth/1.98 , displayHeight - displayHeight/1.17)
  pop();

  push();
  fill(0)
  strokeWeight(2)
  textSize(25);

  text(6 , displayWidth - displayWidth/1.98 , displayHeight - displayHeight/4)
  pop();

  push();
  fill(0)
  strokeWeight(2)
  textSize(25);

  text(3 , displayWidth - displayWidth/3 , displayHeight - displayHeight/1.9)
  pop();

  push();
  fill(0)
  strokeWeight(2)
  textSize(25);

  text(9 , displayWidth - displayWidth/1.48 , displayHeight - displayHeight/1.9)
  pop();

  push();
  fill(0)
  strokeWeight(2)
  textSize(25 );

  text(1 , displayWidth - displayWidth/2.45 , displayHeight - displayHeight/1.25)
  pop();


  push();
  fill(0)
  strokeWeight(2)
  textSize(25 );

  text(2 , displayWidth - displayWidth/2.9 , displayHeight - displayHeight/1.51 )
  pop();

  push();
  fill(0)
  strokeWeight(2)
  textSize(25 );

  text(4 , displayWidth - displayWidth/2.8 , displayHeight - displayHeight/2.6)
  pop();

  push();
  fill(0)
  strokeWeight(2)
  textSize(25 );

  text(5, displayWidth - displayWidth/2.39 , displayHeight - displayHeight/3.6)
  pop();
  
  push();
  fill(0)
  strokeWeight(2)
  textSize(25 );

  text(7 , displayWidth - displayWidth/1.7 , displayHeight - displayHeight/3.6)
  pop();

  push();
  fill(0)
  strokeWeight(2)
  textSize(25 );

  text(8 , displayWidth - displayWidth/1.55 , displayHeight - displayHeight/2.7)
  pop();

  push();
  fill(0)
  strokeWeight(2)
  textSize(25 );

  text(10 , displayWidth - displayWidth/1.5 , displayHeight - displayHeight/1.51)
  pop();

  push();
  fill(0)
  strokeWeight(2)
  textSize(25 );

  text(11 , displayWidth - displayWidth/1.69 , displayHeight - displayHeight/1.25)
  pop();


  translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.8)


  noFill();
  stroke(220 , 220, 220);
  strokeWeight(10)
  arc(0 , 0 ,625 , 625 ,0 , 180)

  noFill();
  stroke(220 , 220, 220);
  strokeWeight(4)
  arc(0 , 0 ,630 , 630 ,180 , 0)

  noFill();
  stroke(60 , 60, 60);
  strokeWeight(10)
  ellipse( 0 , 0 , 600 ,600)

  stroke(0 , 0, 0);
  strokeWeight(8)
  ellipse( 0 , 0 , 615 ,615)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////

theme1Button.mousePressed(update1)

 }

 

function  update2()
{
  updateState(2)
  sound.play();
}

function update1()
{
  updateState(1)
  sound.play();
}
function update3()
{
  updateState(3);
  sound.play();
}
function update4()
{
  updateState(4)
  sound.play();

}

function readState(data)
{
  state = data.val();

}

function updateState(x )
{
  database.ref("/").update({
    state: x
  });
}