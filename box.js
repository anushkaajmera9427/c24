class box{
constructor(x,y,w,h){
    var options = {
        restitution:0.8
      }
      this.width=w
      this.height=h
     this.body=Bodies.rectangle(x,y,w,h,options)
      World.add(world,this.body)
      
}
display(){
    var pos=this.body.position
var angle=this.body.angle
push ()
translate (pos.x,pos.y)
rotate (angle)
    rectMode(CENTER)
    strokeWeight (5)
    stroke ("green")

    rect(0,0,this.width,this.height)
pop ()

}
}