//Create variables here
var dog,happyDog,foodS,foodStock,database,dogImage,happyDogImage,food=0,foodS=20;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale=0.20;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock,writeStock);
  
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImage);


  }

  drawSprites();
  textSize(20);
  fill("red")
  stroke(2)
  text("Food remaining :"+foodS,200,150);
  fill ("black");
  text("NOTE Press UP_ARROW Key To Feed Drago Milk!"+food,1,100);

  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if (x<=0) {
    x=0;
  }else{
    x=x-1;

  }
  database.ref('/').update({
    Food:x
  })
}




