//Creating variables here
var dog,happyDog;
var database;
var foodS,foodStock;
function preload()
{
  //loading images here
  dogImage = loadImage("dogImg.png");
  happydog = loadImage("dogImg1.png");
}

function setup() {
  //Adding database to variable database
  database = firebase.database(); 

  createCanvas(500, 500);
  //creating dog
  dog = createSprite(100,1000,20,30);
  dog.addImage(dogImage);

  //fetching foodstock from database
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}
function draw() {  
background(46, 139, 87);

if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happydog);
}
  drawSprites();
   //adding styles here
text("Food"+foodStock,100,20);
fill("red");
stroke("green");
}
function readStock(data){
foodS=data.val();
}

function writeStock(x){
database.ref('/').ustate({
  Food:x
})
}



