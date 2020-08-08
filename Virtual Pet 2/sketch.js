var dogImg, dogImg1;
var milkBottle;
var feedButton;
var addfoodButton;
var fedTime;
var lastFed;
var foodObj;
var database;
var foodS;
var foodStock;

function preload()
{
  dogImg = loadImage("sprites/dogImg.png");
  milkBottle = loadImage("images/Milk(1).png");
}

function setup() {
canvas = createCanvas(1000,600);
var dogImg = createSprite(900,400,10,10);
var dogImg1 = createSprite(900,450,10,10);
database = firebase.database();
foodStock = database.ref('food');
foodStock.on("value",readStock);
food = new Food();

feed = createButton("Feed the dog");
feed.position(900,50);
feed.mousePressed(feedDog);

addFood = createButton("Add Button");
addFood.position(900,90);
addFood.mousePressed(addFoods);
}

function draw() {  
  display();
fill(255,255,254);
textSize(15);
if(lastFed <= 12){
  text("Last Feed :" + lastFed%12 + "PM",350,30);
}  
else if(lastFed === 0){
text("Last Feed : 12 AM",350,30);
}
else{
  text("Last Feed : " + lastFed + "AM",350,30);
}

fedTime = database.ref('Feed Time');
fedTime.on("value",function(data){
lastFed = data.val();
});
}

addFood.mousePressed({ function(){
  button.hide();
  foodStock += 1;
foodStock.update(Food);
}
});

feed.mousePressed({ function(){
button.hide();
hour();
dogImg1 = loadImage("sprites/dogImg1.png");
food += 1;
foodStock.update(Food);
}
})


function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if(x <= 0){
  x = 0;
}
else{
x = x - 1;
}

  database.ref('/').update({
    Food : x
  })
}



