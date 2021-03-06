const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;

var blocks1;
var blocks2;
function preload() {
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390, 300, 290, 10);
  stand2 = new Stand(700, 200, 200, 10);

  var blocosParaDeletar1 = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 7, y: 1 },
    { x: 7, y: 2 },
    { x: 2, y: 2 },
    { x: 6, y: 2 },
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 3, y: 4 },
    { x: 5, y: 4 },
    { x: 6, y: 4 },
    { x: 7, y: 4 },
    { x: 0, y: 4 },
    { x: 8, y: 4 },];
  var blocosParaDeletar2 = [
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 6, y: 1 },
    { x: 6, y: 2 },
    { x: 1, y: 2 },
    { x: 5, y: 2 },
    { x: 2, y: 2 },
    { x: 4, y: 2 },
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 6, y: 0 },
    { x: 5, y: 1 },];


  blocks1 = criarBlocos(280, 275, blocosParaDeletar1, 9,5);
  blocks2 = criarBlocos(610, 175, blocosParaDeletar2,7,4);
}
function draw() {
  background(56, 44, 44);

  textSize(20);
  fill("lightyellow");

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  for (var i = 0; i < blocks1.length; i++) {
    if (i > 0 && i < 8) {
      fill("pink");
    } else if (i > 9 && i < 15) {
      fill("turquoise");
    } else if (i > 16 && i < 20) {
      fill("grey");
    }else {
      fill ("white");
    }
    blocks1[i].display();
  }

  for (var i = 0; i < blocks2.length; i++) {
    if ( i < 5) {
      fill("green")
    } else if (i < 8) {
      fill("purple")
    } else {
      fill ("white")
    }
    blocks2[i].display();
  }
}

function criarBlocos(startX, startY, blocosParaDeletar, blocksQuantityX, blocksQuantityY) {
  var blocks = [];
  var width = 30;
  var height = 40;

  for (var y = 0; y < blocksQuantityY; y++) {
    for (var x = 0; x < blocksQuantityX; x++) {
      var precisoCriarOBloco = true;

      for (var iDeletar = 0; iDeletar < blocosParaDeletar.length; iDeletar++) {
        var meDelete = blocosParaDeletar[iDeletar]

        if (meDelete.x === x && meDelete.y === y)
          precisoCriarOBloco = false
      }

      if (precisoCriarOBloco === false)
        continue;

      var blockX = startX + (width * x);
      var blockY = startY - (height * y);
      blocks.push(new Block(blockX, blockY, width, height));
    }
  }

  return blocks;
}