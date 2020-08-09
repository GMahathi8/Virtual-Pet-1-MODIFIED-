var dog,happyDog,database,foodS,foodStock;

var database;

function preload()
{
dogIMG = loadImage("images/dogImg.png");
dogIMG2 = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dogSprite=createSprite(width/2, 80, 10,10);
	dogSprite.addImage(dogIMG)
	dogSprite.scale=0.2

  dogSprite=createSprite(width/2, 80, 10,10);
	dogSprite.addImage(dogIMG2)
	dogSprite.scale=0.2



foodStock = database.ref('Food');
foodStock.on("value",readStock);


}


function draw() {  

background(46,139,87);

if(keyWentDown(UP_ARROW)) {

  writeStock(foodS);
  dog.addImage(dogHappy);

}

  drawSprites();
  }

function readStock (data) {
foodS = data.val();

}

function writeStock (x) {

database.ref('/').update({
  Food:X
})

}
