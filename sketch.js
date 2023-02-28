var trex ,trex_correndo;
var chao, chao_img, chao_invisivel;
var nuvem, nuvem_img, nuvem_grupo;

function preload(){
  trex_correndo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  chao_img = loadImage("ground2.png");
  nuvem_img = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  
  //crie um sprite de trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("correndo", trex_correndo);
  trex.scale = 0.5;

  chao = createSprite(200, 180, 400, 20);
  chao.addImage("chao", chao_img);
  chao.x = chao.width / 2;
  chao.velocityX = -4;

  chao_invisivel = createSprite(200, 190, 400, 10);
  chao_invisivel.visible = false;
}

function draw(){
  background("white");
  
  if(keyDown("space") && trex.y >= 150){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;

  if(chao.x < 0 ){
    chao.x = chao.width/2;
  }

  trex.collide(chao_invisivel);

  criarNuvens();

  drawSprites();
}

function criarNuvens(){
  if (frameCount % 60 === 0){
    nuvem = createSprite(600, 100, 40, 10);
    nuvem.addImage(nuvem_img);
    nuvem.scale = 0.5;
    nuvem.y = Math.round(random(20, 100));
    nuvem.velocityX = -4;
  }
}