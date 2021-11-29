var ground, t1, t2, t3,t4,t5,t6, l1, l2, l3, l4, l5, l6, l7, l8, l9
var barrel,barrelGroup
var mario

function preload() {
  ground1= loadImage("assets/track.png")
  t1img= loadImage("assets/track.png")
  t2img= loadImage("assets/track.png")
  t3img= loadImage("assets/track.png")
  t4img= loadImage("assets/track.png")
  t5img= loadImage("assets/track.png")
  t6img= loadImage("assets/track.png")
  l1img= loadImage("assets/ladder.png")
  l2img= loadImage("assets/ladder.png")
  l3img= loadImage("assets/ladder.png")
  l4img= loadImage("assets/ladder.png")
  l5img= loadImage("assets/ladder.png")
  l6img= loadImage("assets/ladder.png")
  marioImg= loadImage("assets/mario.png")
  barrelimg= loadImage("assets/barrel.png")
}

function setup() {
  createCanvas(600,700)

  ground= createSprite(320,650,500,20)
  ground.addImage(ground1)
  ground.scale= 1.6
  ground.rotation=-5

  t1= createSprite(270,550,500,20)
  t1.addImage(t1img)
  t1.scale= 1.6
  t1.rotation=-355

  t2= createSprite(320,450,500,20)
  t2.addImage(t2img)
  t2.scale= 1.6
  t2.rotation=-5

  t3= createSprite(270,350,500,20)
  t3.addImage(t3img)
  t3.scale= 1.6
  t3.rotation=-355

  t4= createSprite(320,250,500,20)
  t4.addImage(t4img)
  t4.scale= 1.6
  t4.rotation=-5

  t5= createSprite(270,150,500,20)
  t5.addImage(t5img)
  t5.scale= 1.6
  t5.rotation=-359

  t6= createSprite(400,70,100,20)
  t6.addImage(t6img)
  t6.scale= 1
  t6.rotation=-360

  l1=createSprite(500,600,20,80)
  l1.addImage(l1img)
  l1.scale=1.5
  
  l2=createSprite(100,500,20,80)
  l2.addImage(l2img)
  l2.scale=1.5

  l3=createSprite(500,400,20,80)
  l3.addImage(l3img)
  l3.scale=1.5

  l4=createSprite(100,300,20,80)
  l4.addImage(l4img)
  l4.scale=1.5

  l5=createSprite(500,200,20,80)
  l5.addImage(l5img)
  l5.scale=1.5

  l6=createSprite(350,100,20,80)
  l6.addImage(l6img)
  l6.scale=1.5

  barrelGroup= new Group();
}

function spawnBarrel(){
  if (frameCount%80==0) {
    barrel=createSprite(150,101,50,50)
    barrel.addImage(barrelimg)
    barrel.scale= 0.1
    barrel.velocityY=2
    barrelGroup.add(barrel)
  }
}

function draw(){
  background(0)
  spawnBarrel()
  barrelGroup.bounceOff(ground)
  barrelGroup.bounceOff(t1)
  barrelGroup.bounceOff(t2)
  barrelGroup.bounceOff(t3)
  barrelGroup.bounceOff(t4)
  barrelGroup.bounceOff(t5)
   
  if (barrelGroup.isTouching(ground)) {
    barrelGroup.setVelocityXEach(-5)
  }

  if (barrelGroup.isTouching(t1)) {
    barrelGroup.setVelocityXEach(5)
  }

  if (barrelGroup.isTouching(t2)) {
    barrelGroup.setVelocityXEach(-5)
  }

  if (barrelGroup.isTouching(t3)) {
    barrelGroup.setVelocityXEach(5)
  }

  if (barrelGroup.isTouching(t4)) {
    barrelGroup.setVelocityXEach(-5)
  }

  if (barrelGroup.isTouching(t5)) {
    barrelGroup.setVelocityXEach(5)
  }
  drawSprites()
}

