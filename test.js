/* configurations*/
var configs = { //list diff moods, age, hunger, and health states (array of configurations)
  mood: ["happy", "neutral", "sad"],
  age: ["baby", "child", "teen", "adult", "senior"],
  health: ["healthy", "sick", "dead"],
  hungry: ["famished", "normal", "hungry", "starving"],
  love: ["hate", "normal", "friendly", "infatuated"]
}

/* gotchi object */

var name = "Danindu";
var age = 2;
var phase = "baby";
var hunger = "normal";
var hp = 10;
var love = "normal";
var lp = 10;
var mood = "neutral";
indexMood = 0;



 function changeMood() {
    mood = configs.mood[indexMood];
    indexMood++;

    if ((hp != -1) && (indexMood < 4)) {
      console.log(mood);
      setTimeout(changeMood, 4000);
    }
  }

  //eat function

  function checkHp() {
    if (hp > 10) {
        hp = 10;
    }

    if (hp < 0) {
        hp = -1;
    }

    if (hp <= 2) {
        hunger = configs.hungry[3];
    }

    else if (hp <= 4 && hp > 2) {
        hunger = configs.hungry[2];
    }

    else if (hp <= 7 && hp > 4) {
      hunger = configs.hungry[1];
    }

    else if (hp < 7) {
      hunger = configs.hungry[0];
    }

  }

  function checkLp() {

    if (lp > 10) {
      lp = 10;
    }

    if (lp < 0) {
      lp = 0;
    }

    if (lp <= 2) {
      love = configs.love[0];
    }

    else if (lp <= 5 && lp > 2) {
      love = configs.love[1];
    }

    else if (lp <= 7 && lp > 5) {
      love = configs.love[2];
    }

    else if (lp <= 10 && lp > 7) {
      love = configs.love[3];
    }

    if (hp < 4 && lp < 3) {

      health = configs.health[1];
    }
  }

  function checkAge() {
    if (age <= 3) {
      phase = configs.age[0];
    }

    if (age >= 4 && age < 12) {
      phase = configs.age[1];
      document.getElementById("rakim").src = "./imgs/baby-happy.png";
    }

    if (age >= 13 && age < 19) {
      phase = configs.age[2];
      console.log(age);
      console.log('oldddd');
      document.getElementById("rakim").src = "./imgs/child-happy.png";
    }

    else if (age >= 20 && age < 23) {
      phase = configs.age[3];
      document.getElementById("rakim").src = "./imgs/adult-happy.png";
    }

    else if (age >= 24 && age < 100) {
      phase = configs.age[4];
      document.getElementById("rakim").src = "./imgs/senior-happy.png";
    }


  }

  function getDanindu() {
    console.log(name + ' is a goon');
    //setTimeout(getDanindu, 2000);
  }

  function getHungry() {
    if (hp > -1) {
      hp--;
      console.log("hp " + hp)
      checkHp();



      setTimeout(getHungry, 4000);
    }
  }

  function getOld() {
    if (hp != -1) {
      age++;
      checkAge();
 

      setTimeout(getOld, 3900);
    }
  }

  function lowerLove() {
    if ((lp > 0) && (hp != -1)) {
      lp--;
      console.log("lp " + lp)
      checkLp();
      //console.log("lp " + objName.lp)
      setTimeout(lowerLove, 4000);
    }
  }

  function feed() {
    hp += 5;

    if (hp >= 15) {
      health = configs.health[1];
    }

    if (hp >= 25) {
      hp = -1;
      document.getElementById("rakim").src = "./imgs/rip.png";

    }
  }

  function play() {
    if (lp < 10) {
      lp += 10;
    }
    console.log("playing");
  }

  

//var danindu = new Gotchi('Danindu', 2, 'full', 'normal', 'happy');

  setTimeout(lowerLove,4000);
  setTimeout(getOld,3000);
  setTimeout(getHungry,3000);
  setTimeout(changeMood,3000);



