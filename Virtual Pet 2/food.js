class food{
constructor(){
    var foodStock;
    var lastFed;
}

getFoodStck(){
    var getFoodStck = database.ref('FoodStock');
    getFoodStckRef.on("value",function(data){

    });
}

update(FoodStock){
    database.ref('/').update({
        FoodStock : Food
    });
}

display(){
    milkBottle.addImage(milkBottle);
}

}