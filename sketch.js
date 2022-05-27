var gamestate= "wait"
var bgplay,b1,aboutpop,aboutImg


function preload(){
bg=loadImage("splashscreen.png")
bgplay=loadImage("bg.gif")
bgplay2=loadImage("bgplay1.gif")
aboutImg=loadImage("popabout.png")



}


function setup(){
createCanvas(windowWidth-20,windowHeight-20)


play=createImg("play.gif")
play.position(width/2+width/3.5,18)
play.size(200,200)

about=createImg("about.gif")
about.position(play.x+150,0)
about.size(180,180)

aboutpop=createSprite(width/2,height/2+20,200,200)
aboutpop.visible=false
aboutpop.addImage(aboutImg)
aboutpop.scale=4.25

}


function draw()
{
    background(bg)

if(gamestate==="wait"){
    play.show()
    about.show()
}

//play button functionality
play.mousePressed(()=>{
   gamestate="play"
})

if(gamestate==="play"){
    background(bgplay2)
    play.hide()
    about.hide()
}


//about button functionality
about.mousePressed(()=>{
    gamestate="about"
    aboutpop.visible=true

 })
 
 if(gamestate==="about"){
     play.hide()
     about.hide()
 }


 drawSprites()


 if (gamestate==="about"){
     fill("red")
     stroke("black")
     strokeWeight(2)
    textSize(30)
     text("Let the Basketball Madness begin!\nIf you are into street basketball & \nyou love to have fun for hours,\n be a part of this challenge.\n Sam is having a Big Day soon. \nIt's his selection day in\n the world's best Basket Ball team..\n\n So he is practising for it...\nOn his way to the ground..\n\nHELP HIM TO ACHIEVE\nTHE BASKET ON EVERY THROW..",aboutpop.x+50-(aboutpop.width+100),aboutpop.y-(aboutpop.height+50))
 }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}