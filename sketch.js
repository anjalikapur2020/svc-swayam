gamestate= "start"


function preload(){
bg=loadImage("splashscreen.png")
}


function setup(){
createCanvas(windowWidth-20,windowHeight-20)


play=createImg("play.gif")
play.position(50,height/4)
play.size(200,200)

about=createImg("about.gif")
about.position(70,height/2.45)
about.size(180,180)





}


function draw()
{
    background(bg)

play.mousePressed(()=>{
   gamestate="play"
})

if(gamestate==="play"){
    background(0)
}

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}