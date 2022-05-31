class Ball{
    constructor(){


var options={
    isStatic:false,
    restitution:.9
}


this.body=Bodies.circle(50,windowHeight-100,50,options)
this.image=loadImage("ball.gif")
World.add(world,this.body)
    }


show(){

    var pos=this.body.position
    push()
iamgeMode(CENTER)
    image(pos.x,pos.y,50)
pop()
}


}