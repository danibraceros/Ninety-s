
var configs = { //list diff moods, age, hunger, and health states (array of configurations)
  mood: ["happy", "neutral", "sad"],
  age: ["baby", "child", "teen", "adult", "senior"],
  health: ["healthy", "sick", "dead"],
  hungry: ["famished", "normal", "hungry", "starving"],
  love: ["hate", "normal", "friendly", "infatuated"]
}

function Gotchi(name, age, hunger, love, mood) {
  this.name = name;
  this.age = age;
  this.phase = age;
  this.hunger = hunger;
  this.hp = 10;
  this.love = love;
  this.lp = 10;
  this.mood = mood;

  //index from configs, starts at 0 (base)
  this.indexAge = 0;
  this.indexMood = 0;
  this.indexHunger = 0;
  this.indexHp = 0;
  this.indexLp = 0;
}

Gotchi.prototype.update = function () {
  this.className = this.name + " " + this.mood + " " + this.hunger + " " + this.age + " " + this.love;
}

Gotchi.prototype.lifecycle = function () {
  var objName = this;

  function changeMood() {
    objName.mood = configs.mood[objName.indexMood];

    if (objName.indexMood < 2) {
      objName.indexMood++;
    }

    if (objName.hp != -1) {
      console.log("Your TAMAGOTCHI is " + objName.mood + ".");
      setTimeout(changeMood,1000);
    }
  }

  //eat function

  function checkHp() {
    if (objName.hp > 10) {
      objName.hp = 10;
    }

    if (objName.hp < 0) {
      objName.hp = -1;
      console.log("Your TAMAGOTCHI is dead. :(");
    }

    if (objName.hp <= 2) {
      objName.hunger = configs.hungry[3];
    }

    else if (objName.hp <= 4 && objName.Hp > 2) {
      objName.hunger = configs.hungry[2];
    }

    else if (objName.hp <= 7 && objName.Hp > 4) {
      objName.hunger = configs.hungry[1];
    }

    else if (objName.hp < 7) {
      objName.hunger = configs.hungry[0];
    }

  }

  function checkLp() {
    if (objName.lp > 10) {
      objName.lp = 10;
    }

    if (objName.lp < 0) {
      objName.lp = 0;
    }

    if (objName.lp <= 2) {
      objName.love = configs.love[0];
    }

    else if (objName.Lp <= 5 && objName.Lp > 2) {
      objName.love = configs.love[1];
    }

    else if (objName.Lp <= 7 && objName.Lp > 5) {
      objName.love = configs.love[2];
    }

    else if (objName.Lp <= 10 && objName.Lp > 7) {
      objName.love = configs.love[3];
    }

    if(objName.hp < 4 && objName.lp < 3){
      objName.health = configs.health[1];
    }
  }

  function checkAge(){

    if (objName.age <= 3) {
      objName.phase = configs.age[0];
    }

    else if (objName.age <= 4 && objName.age > 12 ) {
      objName.phase = configs.age[1];
    }

    else if (objName.age <= 13 && objName.age > 19) {
      objName.phase = configs.age[2];
    }

    else if (objName.age <= 20 && objName.age > 23) {
      objName.phase = configs.age[3];
    }

    else if (objName.age <= 24 && objName.age > 100) {
      objName.phase = configs.age[4];
    }
  }

  function getHungry(){
    if (objName.hp > -1){
      objName.hp--;
      console.log("Your TOMOGATCHI has " + objName.hp + " hunger points.")
      checkHp();
      setTimeout(getHungry,1000);
    }
  }

  function getOld(){
      if(objName.hp != -1){
      objName.age++;
      console.log("Your TAMAGOTCHI is " + objName.age + " years old.");
      console.log("-------------------------------------");
      checkAge();
      setTimeout(getOld,1000);
      }
  }  

  function lowerLove(){
    if ((objName.lp > 0) && (objName.hp != -1)){
      objName.lp--;
      console.log("Your TAMAGOTCHI has " + objName.lp + " love points.")
      checkLp();
      setTimeout(lowerLove,1000);
    }
  }    
  
  function feed(){
    objName.hp += 2;

    if(hp >= 15){
      objName.health = configs.health[1];
    }

    if(hp >= 25){
      objName.hp = -1;
      console.log("You fed your TAMAGOTCHI too much!");
    }
  }

  function play(){
    if (objName.lp > 10){
    objName.lp += 2;
    }
  }

  setTimeout(getHungry, 1000);
  setTimeout(lowerLove, 1000);
  setTimeout(getOld, 2000);
  setTimeout(changeMood, 1000);
}

var danindu = new Gotchi('Danindu', 2, 'full', 'normal', 'happy');

danindu.lifecycle();
