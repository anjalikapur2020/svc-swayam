const World= Matter.World
const Engine= Matter.Engine
const Bodies= Matter.Bodies
const Body= Matter.Body



var engine,world,ball1

var gamestate= "wait"
var bgplay,b1,aboutpop,aboutImg


function preload(){
bg=loadImage("splashscreen.png")
bgplay=loadImage("bg.gif")
bgplay2=loadImage("bgplay1.gif")
aboutImg=loadImage("popabout.png")
hoopimg=loadImage("basketballhoop.png")
ballimg1=loadImage("ball.gif")
ballimg=loadImage("ball.png")


}


function setup(){
createCanvas(windowWidth-20,windowHeight-20)

engine=Engine.create()
world=engine.world

play=createImg("play.gif")
play.position(width/2+width/3.5,18)
play.size(200,200)

about=createImg("about.gif")
about.position(play.x+150,0)
about.size(180,180)

back=createImg("back.png")
back.position(width-200,height-100)
back.size(100,100)
back.hide()


cancel=createImg("cancelimg.png")
cancel.position(width-200,height-100)
cancel.size(100,100)
cancel.hide()

aboutpop=createSprite(width/2,height/2+20,200,200)
aboutpop.visible=false
aboutpop.addImage(aboutImg)
aboutpop.scale=5


hoopsgroup = new Group()
obstaclesgroup = new Group()

ground =new Ground(width/2,height-50,width,20);
var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

}


function draw()
{
    background(bg)
    Engine.update(engine)

if(gamestate==="wait"){
    play.show()
    about.show()
    back.hide()
    cancel.hide()


}

//play button functionality
play.mousePressed(()=>{
   gamestate="play"
})

if(gamestate==="play"){
    background(bgplay2)
    play.hide()
    about.hide()
    back.show()
    cancel.hide()
    imageMode(CENTER)
image(ballimg,this.ball.position.x,this.ball.position.y,80,80)
    spawnHoops()
    //ground.show()


    if(keyDown("RIGHT_ARROW")){
        Matter.Body.applyForce(ball,{x:0,y:0},{x:.01,y:-.01})
    }

}


//about button functionality
about.mousePressed(()=>{
    gamestate="about"
    aboutpop.visible=true
    cancel.show()

 })
 
 if(gamestate==="about"){
     play.hide()
     about.hide()
     cancel.show()

 }

//back button functionality
back.mousePressed(()=>{
    gamestate="wait"
 })

 //cancel button functionality
cancel.mousePressed(()=>{
    gamestate="wait"
    aboutpop.visible=false
 })

 if (gamestate !== "play"){
     hoopsgroup.destroyEach()
 }
 
 drawSprites()


 if (gamestate==="about"){
     fill("red")
     stroke("black")
     strokeWeight(2)
    textSize(30)
textAlign("left")
    // text("Let the Basketball Madness begin!\nIf you are into street basketball & \nyou love to have fun for hours,\n be a part of this challenge.\n Sam is having a Big Day soon. \nIt's his selection day in\n the world's best Basket Ball team..\n\n So he is practising for it...\nOn his way to the ground..\n\nHELP HIM TO ACHIEVE\nTHE BASKET ON EVERY THROW..",aboutpop.x+50-(aboutpop.width+100),aboutpop.y-(aboutpop.height+50))
 text("Let the Madness begin!\nIf you play basketball\nfor hours with your friends\n or if you just like to watch \nyour favorite teams dominate in the NBA...\n come participate in this challenge!!\n Help Sam practice for his big day... \nThe tryouts for the Golden State Warriors!!\n The world's best basketball team is \ncoming up soon..\n\nHELP HIM TO SHOOT\nTHE BASKET ON EVERY HOOP..",aboutpop.x+50-(aboutpop.width+80),aboutpop.y-(aboutpop.height+50))
 
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function spawnHoops(){
if(frameCount%200===0){
    hoop=createSprite(width,50,50,50)
    hoop.addImage(hoopimg)
hoop.debug=true
hoop.setCollider("circle",0,50,20)
hoop.velocityX=-4
hoop.y=Math.round(random(50,height/2))
    hoopsgroup.add(hoop)

}

}