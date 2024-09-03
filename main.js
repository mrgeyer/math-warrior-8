Player = {
  XP: 0,
  Gold: 0,
  MirrorBattlesWon: []
};
CurrentBattle = 0;

equationLeftSide = [];
equationRightSide = [];
x = {degree: 1, coefficient: 1};

function updateEquationSide(equationSide) {
  let outputText = "<table><tr>";
  for(let i = 0;  i < equationSide.length; i++) {
    if (equationSide[i].degree === 1) {
      if (equationSide[i].coefficient === 1) {
        outputText += "<td class='battleCard'>";
        outputText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/treasureBag.png' alt='Treasure' width=50>";
        outputText += "</td>"; 
      } else {
         outputText += "<td class='battleCard'>";
        if (equationSide[i].coefficient > 0) {
          outputText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/blueCothief.png' alt='Blue Cothief' width=50>";
        } else if (equationSide[i].coefficient < 0) {
          outputText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/redCothief.png' alt='Red Cothief' width=50>";        
        } else if (equationSide[i].coefficient === 0) {
          outputText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/dead.png' alt='Red Cothief' width=50>";        
        }
        outputText += "<br />HP: " + Math.abs(equationSide[i].coefficient) + "</td>";
      } 
    } else if (equationSide[i].degree === 0) {
       outputText += "<td class='battleCard'>";
    if (equationSide[i].coefficient > 0) {
        outputText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/BlueCon.png' alt='Blue Con' width=50>";
      } else if (equationSide[i].coefficient < 0) {
        outputText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/RedCon.png' alt='Red Con' width=50>";
      } else if (equationSide[i].coefficient === 0) {
         outputText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/dead.png' alt='Red Con' width=50>";
      }
        outputText += "<br />HP: " + Math.abs(equationSide[i].coefficient) + "</td>";
    }
  }
  outputText += "</tr></table>";
  return outputText;
}


function updateMirrorBattle(){
  let leftText = updateEquationSide(equationLeftSide);
  document.getElementById("leftSide").innerHTML = leftText;
  let rightText = updateEquationSide(equationRightSide);
  document.getElementById("rightSide").innerHTML = rightText;
}

function mirrorBattle(level) {
  CurrentBattle = level;
  document.getElementById("middle").innerHTML = "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/mirror.png' alt='Mirror' width=100 height=200>";
  if (level === 1) {
    let lc = Math.ceil(Math.random() * 9);
    let rc = Math.ceil(Math.random() * 9);
    if (Math.random() > .5){
    equationLeftSide = [x, {degree: 0, coefficient: lc}];
    equationRightSide = [{degree: 0, coefficient: rc}];
    } else {
      equationLeftSide = [{degree: 0, coefficient: lc}];
    equationRightSide = [x, {degree: 0, coefficient: rc}];
    }
  }
  if (level === 2) {
    let lc = Math.ceil(Math.random() * 18 - 9);
    if (lc === 0) {
      lc += 1;
    }
    let rc = Math.ceil(Math.random() * 18 - 9);
    if (rc === 0) {
       rc += 1;
    }
    if (Math.random() > .5){
    equationLeftSide = [x, {degree: 0, coefficient: lc}];
    equationRightSide = [{degree: 0, coefficient: rc}];
    } else {
      equationLeftSide = [{degree: 0, coefficient: lc}];
    equationRightSide = [x, {degree: 0, coefficient: rc}];
    }
  }
  
    if (level === 4) {
      let m = Math.ceil(Math.random() * 18 - 9);
      if (m === 0) {
        m += 2;
      }
      if (m === 1) {
        m += 2;
      }
      let b = Math.ceil(Math.random() * 18 - 9);
      if (b === 0) {
         b += 1;
      }
      let rb = Math.ceil(Math.random() * 18 - 9);
      if (rb === 0) {
         rb += 1;
      }
      if (Math.random() > .5){
        equationLeftSide = [{degree: 1, coefficient: m}, {degree: 0, coefficient: b}];
        equationRightSide = [{degree: 0, coefficient: rb}];
      } else {
        equationLeftSide = [{degree: 0, coefficient: b}];
        equationRightSide = [{degree: 1, coefficient: m}, {degree: 0, coefficient: rb}];
      }
    }
  
     if (level === 3) {
    let m = Math.ceil(Math.random() * 18 - 9);
    if (m === 0) {
      m += 2;
    }
    if (m === 1) {
      m += 2;
    }
    let b = Math.ceil(Math.random() * 18 - 9);
    if (b === 0) {
       b += 1;
    }
    if (Math.random() > .5){
    equationLeftSide = [{degree: 1, coefficient: m}];
    equationRightSide = [{degree: 0, coefficient: b}];
    } else {
      equationLeftSide = [{degree: 0, coefficient: b}];
    equationRightSide = [{degree: 1, coefficient: m}];
    }
  }
  if (level === 5) {
      let m = Math.ceil(Math.random() * 8 + 1);
      if (m === 0) {
        m += 2;
      }
      if (m === 1) {
        m += 2;
      }
          let rm = Math.ceil(Math.random() * 9);
      if (rm === m) {
        rm += 1;
      }
      if (rm === 0) {
        rm += 2;
      }
      if (rm === 1) {
        rm += 2;
      }
      let b = Math.ceil(Math.random() * 18 - 9);
      if (b === 0) {
         b += 1;
      }
      let rb = Math.ceil(Math.random() * 18 - 9);
      if (rb === 0) {
         rb += 1;
      }
        equationLeftSide = [{degree: 1, coefficient: m}, {degree: 0, coefficient: b}];
        equationRightSide = [{degree: 1, coefficient: rm},{degree: 0, coefficient: rb}];
    }
    if (level === 6) {
      let m = Math.ceil(Math.random() * 10 - 5);
      if (m === 0) {
        m += 2;
      }
      if (m === 1) {
        m += 2;
      }
          let rm = Math.ceil(Math.random() * 8 - 4);
      if (rm === m) {
        rm += 1;
      }
      if (rm === 0) {
        rm += 2;
      }
      if (rm === 1) {
        rm += 2;
      }
      let b = Math.ceil(Math.random() * 18 - 9);
      if (b === 0) {
         b += 1;
      }
      let rb = Math.ceil(Math.random() * 18 - 9);
      if (rb === 0) {
         rb += 1;
      }
        equationLeftSide = [{degree: 1, coefficient: m}, {degree: 0, coefficient: b}];
        equationRightSide = [{degree: 1, coefficient: rm},{degree: 0, coefficient: rb}];
    }
    updateMirrorBattle();

    let buttonText = "<table><tr><th colspan=2>Select your attack below. Click the number to choose your attack power.</th></tr>";
        if (Player.MirrorBattlesWon.indexOf(4) > -1) {
        // Subduer Axe
        buttonText += "<tr ><td class='redweapon'>";
        buttonText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/subduerAxe.png' alt='+x' width=50> Subduer Axe";
        for (let i = 1; i < 10; i++) {
          buttonText += "<button class='redbutton' onclick=subX(" + i + ")>" + i + "</button>";
        }
      buttonText += "</td></tr>";
    }
          if (Player.MirrorBattlesWon.indexOf(5) > -1) {
        // Addler Axe
        buttonText += "<tr ><td class='blueweapon'>";
        buttonText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/addlerAxe.png' alt='-x' width=50> Addler Axe";
        for (let i = 1; i < 10; i++) {
          buttonText += "<button class='bluebutton' onclick=addX(" + i + ")>" + i + "</button>";
        }
      buttonText += "</td></tr>";
    }
      // Subduer
    buttonText += "<tr ><td class='redweapon'>";
    buttonText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/subduer.png' alt='-' width=50> Subduer";
    for (let i = 1; i < 10; i++) {
      buttonText += "<button class='redbutton' onclick=subCon(" + i + ")>" + i + "</button>";
    }
    buttonText += "</td></tr>";
    if (Player.MirrorBattlesWon.indexOf(1) > -1) {
      // Addler
      buttonText += "<tr ><td class='blueweapon'>";
      buttonText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/addler.png' alt='+' width=50> Addler ";
      for (let i = 1; i < 10; i++) {
        buttonText += "<button class='bluebutton' onclick=addCon(" + i + ")>" + i + "</button>";
      }
      buttonText += "</td></tr>";
    }

      if (Player.MirrorBattlesWon.indexOf(2) > -1) {
      // Diviner
      buttonText += "<tr ><td class='blueweapon'>";
      buttonText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/diviner.png' alt='÷' width=50> Diviner ";
      for (let i = 1; i < 10; i++) {
        buttonText += "<button class='redbutton' onclick=divide(-" + i + ")>" + i + "</button>";
      }
      for (let i = 1; i < 10; i++) {
        buttonText += "<button class='bluebutton' onclick=divide(" + i + ")>" + i + "</button>";
      }  
      buttonText += "</td></tr>";
    }
    buttonText += "</table>";
    buttonText += "<button class='redbutton' onclick='mirrorWorldMap()'>Run!</button>";
  document.getElementById("interactions").innerHTML = buttonText;
}

function victoryCheck() {
  let win = false;
  let xleft = 0;
  let xright = 0;
  for (let i = 0; i < equationLeftSide.length; i++) {
    if(equationLeftSide[i].degree === 1 && equationLeftSide[i].coefficient === 1){
      xleft += 1;
    }
  }
    for (let i = 0; i < equationRightSide.length; i++) {
    if(equationRightSide[i].degree === 1 && equationRightSide[i].coefficient === 1){
      xright += 1;
    }
  }
  if (xleft === 1) {
    win = true;
    for (let i = 0; i < equationLeftSide.length; i++) {
      if (equationLeftSide[i].degree == 1) {
        if (equationLeftSide[i].coefficient != 1) {
          win = false;
        }
      }else if (equationLeftSide[i].coefficient != 0) {
          win = false; 
          }
        }
      }
    if (xright === 1) {
    win = true;
    for (let i = 0; i < equationRightSide.length; i++) {
      if (equationRightSide[i].degree == 1) {
        if (equationRightSide[i].coefficient != 1) {
          win = false; 
        }
      } else  if (equationRightSide[i].coefficient != 0) {
          win = false; 
          }
        }
      }
  return win;
}

function subX(n) {
let leftConBoole = false;
let leftConIndex = 0;
let rightConBoole = false;
let rightConIndex = 0;
  for (let i = 0; i < equationLeftSide.length; i++) {
    if (equationLeftSide[i].degree === 1) {
      leftConBoole = true;
      leftConIndex = i;
      break;
    }
  }
  for (let i = 0; i < equationRightSide.length; i++) {
    if (equationRightSide[i].degree === 1) {
      rightConBoole = true;
      rightConIndex = i;
      break;
    }
  }
  if (leftConBoole){
  equationLeftSide[leftConIndex].coefficient -= n;
  } else {
    equationLeftSide.push({degree: 1, coefficient: (0 - n)});
  }
   if (rightConBoole){
  equationRightSide[rightConIndex].coefficient -= n;
  } else {
    equationRightSide.push({degree: 1, coefficient: (0 - n)});
  }
  updateMirrorBattle();
  if (victoryCheck()) {
    let XPgained = 10;
    let Goldgained = CurrentBattle * 10;
     let winMsg = "You Win!<br />";
    if (Player.MirrorBattlesWon.indexOf(CurrentBattle) === -1) {
      Player.MirrorBattlesWon.push(CurrentBattle);
      XPgained = CurrentBattle * 100;
    } else {
       XPgained = CurrentBattle * 10;     
    }
    Player.Gold += Goldgained;
    Player.XP += XPgained;
    winMsg += "You earned " + XPgained + " Experience Points.<br />";
    winMsg += "You found " + Goldgained + " pieces of gold.<br />";
    winMsg += "<button onclick='mirrorWorldMap()'>Click here to return to the world map.</button>";
      document.getElementById("interactions").innerHTML = winMsg; 
  }
}

function addX(n) {
let leftConBoole = false;
let leftConIndex = 0;
let rightConBoole = false;
let rightConIndex = 0;
  for (let i = 0; i < equationLeftSide.length; i++) {
    if (equationLeftSide[i].degree === 1) {
      leftConBoole = true;
      leftConIndex = i;
      break;
    }
  }
  for (let i = 0; i < equationRightSide.length; i++) {
    if (equationRightSide[i].degree === 1) {
      rightConBoole = true;
      rightConIndex = i;
      break;
    }
  }
  if (leftConBoole){
  equationLeftSide[leftConIndex].coefficient += n;
  } else {
    equationLeftSide.push({degree: 1, coefficient: n});
  }
   if (rightConBoole){
  equationRightSide[rightConIndex].coefficient += n;
  } else {
    equationRightSide.push({degree: 1, coefficient: n});
  }
  updateMirrorBattle();
  if (victoryCheck()) {
    let XPgained = 10;
    let Goldgained = CurrentBattle * 10;
     let winMsg = "You Win!<br />";
    if (Player.MirrorBattlesWon.indexOf(CurrentBattle) === -1) {
      Player.MirrorBattlesWon.push(CurrentBattle);
      XPgained = CurrentBattle * 100;
    } else {
       XPgained = CurrentBattle * 10;     
    }
    Player.Gold += Goldgained;
    Player.XP += XPgained;
    winMsg += "You earned " + XPgained + " Experience Points.<br />";
    winMsg += "You found " + Goldgained + " pieces of gold.<br />";
    winMsg += "<button onclick='mirrorWorldMap()'>Click here to return to the world map.</button>";
      document.getElementById("interactions").innerHTML = winMsg; 
  }
}

function subCon(n) {
let leftConBoole = false;
let leftConIndex = 0;
let rightConBoole = false;
let rightConIndex = 0;
  for (let i = 0; i < equationLeftSide.length; i++) {
    if (equationLeftSide[i].degree === 0) {
      leftConBoole = true;
      leftConIndex = i;
      break;
    }
  }
  for (let i = 0; i < equationRightSide.length; i++) {
    if (equationRightSide[i].degree === 0) {
      rightConBoole = true;
      rightConIndex = i;
      break;
    }
  }
  if (leftConBoole){
  equationLeftSide[leftConIndex].coefficient -= n;
  } else {
    equationLeftSide.push({degree: 0, coefficient: (0 - n)});
  }
   if (rightConBoole){
  equationRightSide[rightConIndex].coefficient -= n;
  } else {
    equationRightSide.push({degree: 0, coefficient: (0 - n)});
  }
  updateMirrorBattle();
  if (victoryCheck()) {
    let XPgained = 10;
    let Goldgained = CurrentBattle * 10;
     let winMsg = "You Win!<br />";
    if (Player.MirrorBattlesWon.indexOf(CurrentBattle) === -1) {
      Player.MirrorBattlesWon.push(CurrentBattle);
      XPgained = CurrentBattle * 100;
    } else {
       XPgained = CurrentBattle * 10;     
    }
    Player.Gold += Goldgained;
    Player.XP += XPgained;
    winMsg += "You earned " + XPgained + " Experience Points.<br />";
    winMsg += "You found " + Goldgained + " pieces of gold.<br />";
    winMsg += "<button onclick='mirrorWorldMap()'>Click here to return to the world map.</button>";
      document.getElementById("interactions").innerHTML = winMsg; 
  }
}

function addCon(n) {
let leftConBoole = false;
let leftConIndex = 0;
let rightConBoole = false;
let rightConIndex = 0;
  for (let i = 0; i < equationLeftSide.length; i++) {
    if (equationLeftSide[i].degree === 0) {
      leftConBoole = true;
      leftConIndex = i;
      break;
    }
  }
  for (let i = 0; i < equationRightSide.length; i++) {
    if (equationRightSide[i].degree === 0) {
      rightConBoole = true;
      rightConIndex = i;
      break;
    }
  }
  if (leftConBoole){
  equationLeftSide[leftConIndex].coefficient += n;
  } else {
    equationLeftSide.push({degree: 0, coefficient: (n)});
  }
   if (rightConBoole){
  equationRightSide[rightConIndex].coefficient += n;
  } else {
    equationRightSide.push({degree: 0, coefficient: (n)});
  }
  updateMirrorBattle();
  if (victoryCheck()) {
    let XPgained = 10;
    let Goldgained = CurrentBattle * 10;
     let winMsg = "You Win!<br />";
    if (Player.MirrorBattlesWon.indexOf(CurrentBattle) === -1) {
      Player.MirrorBattlesWon.push(CurrentBattle);
      XPgained = CurrentBattle * 100;
    } else {
       XPgained = CurrentBattle * 10;     
    }
    Player.Gold += Goldgained;
    Player.XP += XPgained;
    winMsg += "You earned " + XPgained + " Experience Points.<br />";
    winMsg += "You found " + Goldgained + " pieces of gold.<br />";
    winMsg += "<button onclick='mirrorWorldMap()'>Click here to return to the world map.</button>";
      document.getElementById("interactions").innerHTML = winMsg;
  }
}


function divide(n) {
  for (let i = 0; i < equationLeftSide.length; i++) {
    equationLeftSide[i].coefficient /=  n;  
    }
    for (let i = 0; i < equationRightSide.length; i++) {
    equationRightSide[i].coefficient /=  n;  
    }  
  updateMirrorBattle();
  if (victoryCheck()) {
    let XPgained = 10;
    let Goldgained = CurrentBattle * 10;
     let winMsg = "You Win!<br />";
    if (Player.MirrorBattlesWon.indexOf(CurrentBattle) === -1) {
      Player.MirrorBattlesWon.push(CurrentBattle);
      XPgained = CurrentBattle * 100;
    } else {
       XPgained = CurrentBattle * 10;     
    }
    Player.Gold += Goldgained;
    Player.XP += XPgained;
    winMsg += "You earned " + XPgained + " Experience Points.<br />";
    winMsg += "You found " + Goldgained + " pieces of gold.<br />";
    winMsg += "<button onclick='mirrorWorldMap()'>Click here to return to the world map.</button>";
      document.getElementById("interactions").innerHTML = winMsg; 
  }
}

function hermit() {
  let hermitPic = "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/hermit.png' alt='Hermit'>";
  let hermitTalk = "Hermit: Hello, adventurer. Stay awhile and listen.<br />";
  if (Player.MirrorBattlesWon.indexOf(1) === -1) {
  hermitTalk += "Hermit: Mirrorland is being attacked by thieves and convicts.<br />";
  hermitTalk += "Hermit: It's dangerous to go alone. Take this.<br />";
  hermitTalk += "***********************************<br />";
  hermitTalk += "* You receive the Subduer dagger. *<br />";
  hermitTalk += "***********************************<br />";
  hermitTalk += "Hermit: This Subduer dagger is effective against the Blue Cons.<br />";
  hermitTalk += "Hermit: It will attack the Cons on both sides of the Mirror.<br />";
  hermitTalk += "Hermit: Cons are weak and can be slayed in a single attack.<br />";
  hermitTalk += "Hermit: However, you may find that once you defeat one Con another is healed or takes its place on the other side of the mirror.<br />";
  hermitTalk += "Hermit: While the subduer can afflict damage to Blue Cons, it will heal the Red Cons.<br />";
  hermitTalk += "Hermit: Focus on defeating the Con on the side of the mirror with the treasure bag.<br />";
    hermitTalk += "Hermit: You will be victorious if you get the treasure on one side of the mirror and the Con on the otherside.<br />";
  hermitTalk += "Hermit: Try out the subduer in Mirror Battle 1.<br />";
  hermitTalk += "Hermit: After you master the art of the subduer, visit me again before preceding further.<br />";
  hermitTalk += "Hermit: I am working on procuring a way to dispatch Red Cons.<br />";
  } else if (Player.MirrorBattlesWon.indexOf(2) === -1){
  hermitTalk += "Hermit: It's dangerous to go alone. Take this.<br />";
  hermitTalk += "*********************************<br />";
  hermitTalk += "* You receive the Addler sword. *<br />";
  hermitTalk += "*********************************<br />";
  hermitTalk += "Hermit: Now you can defeat those pesky Red Cons.<br />";
  hermitTalk += "Hermit: The Addler works like the Subduer. However, the Addler does damage to Red Cons and heals Blue Cons.<br />";
  hermitTalk += "Hermit: Remember to focus your attacks on Cons that are on the same side of the mirror as the treasure.<br />";
  } else if (Player.MirrorBattlesWon.indexOf(3) === -1){
  hermitTalk += "Hermit: It's dangerous to go alone. Take this.<br />";
  hermitTalk += "********************************<br />";
  hermitTalk += "* You receive the Diviner rod. *<br />";
  hermitTalk += "********************************<br />";
  hermitTalk += "Hermit: The Diviner Rod can be used to defeat the Cothieves who hold the treasure bags.<br />";
  hermitTalk += "Hermit: The Diviner Rod will attack all enemies and reduce their HP to a fraction of what it was.<br />";
  hermitTalk += "Hermit: You will want to reduce the Cothief's HP to 1.<br />";
  hermitTalk += "Hermit: When their HP drops to 1, they will drop the treasure and run away.<br />";
  hermitTalk += "Hermit: As long as there are no cons on that side of the mirror, you will be victorious.<br />";
  hermitTalk += "Hermit: Whereas you used the opposite color attack on cons, use the same color attack on the cothieves.<br />";
  hermitTalk += "Hermit: Use the blue diviner attack on blue cothieves and red diviner attacks on red cothieves.<br />";
  } else if (Player.MirrorBattlesWon.indexOf(4) === -1){
  hermitTalk += "Hermit: Your first attack should to be to defeat the con on the same side as the cothief.<br />";
  hermitTalk += "Hermit: Then, take out the cothief.<br />";
  } else if (Player.MirrorBattlesWon.indexOf(5) === -1){
  hermitTalk += "Hermit: It's dangerous to go alone. Take this.<br />";
  hermitTalk += "********************************<br />";
  hermitTalk += "* You receive the Subduer Axe. *<br />";
  hermitTalk += "********************************<br />";
  hermitTalk += "Hermit: The Subduer Axe can be used to defeat the Blue Cothieves who hold the treasure bags.<br />";
  hermitTalk += "Hermit: It will do damamge to Cothieves on both sides of the mirror.<br />";
  hermitTalk += "Hermit: It will hurt Blue Cothieves and heal Red Cothieves.<br />";
  hermitTalk += "Hermit: After defeating the cothief on one side of the mirror, defeat any cons on the same side of the mirror as the remaining cothief.<br />";
  hermitTalk += "Hermit: Then, use your diviner rod to finish off the cothief.<br />";
  } else if (Player.MirrorBattlesWon.indexOf(6) === -1){
  hermitTalk += "Hermit: It's dangerous to go alone. Take this.<br />";
  hermitTalk += "********************************<br />";
  hermitTalk += "* You receive the Addler Axe. *<br />";
  hermitTalk += "********************************<br />";
  hermitTalk += "Hermit: The Addler Axe can be used to defeat the Red Cothieves who hold the treasure bags.<br />";
  hermitTalk += "Hermit: It will do damamge to Cothieves on both sides of the mirror.<br />";
  hermitTalk += "Hermit: It will heal Blue Cothieves and hurt Red Cothieves.<br />";
  hermitTalk += "Hermit: After defeating the cothief on one side of the mirror, defeat any cons on the same side of the mirror as the remaining cothief.<br />";
  hermitTalk += "Hermit: Then, use your diviner rod to finish off the cothief.<br />";
  }
  
  hermitTalk += "<button onclick='mirrorWorldMap()'>Click here to return to the world map.</button>";
  document.getElementById("leftSide").innerHTML = hermitPic;
  document.getElementById("middle").innerHTML = hermitTalk;
  document.getElementById("rightSide").innerHTML = "";
  document.getElementById("interactions").innerHTML = "";  
}

function mirrorWorldMap() {
  let mapText = "<div class='map'><h1>Mirror World</h1>";
      mapText += "<button class='mapButton'onclick='hermit()'>";
  mapText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/hermitHouse.png' alt='Hermit House' height=50> <br />";
  mapText += "Helpful Hermit</button>"
      mapText += "<button class='mirrorMapButton' onclick='mirrorBattle(1)'>"; 
  mapText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/mirror.png' alt='Mirror' height=50> <br />";
  mapText += "Mirror Battle 1</button>";
  if (Player.MirrorBattlesWon.indexOf(1) > -1) {
   mapText += "<button class='mirrorMapButton' onclick='mirrorBattle(2)'>"; 
   mapText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/mirror.png' alt='Mirror' height=50> <br />";
   mapText += "Mirror Battle 2</button>";
  }
   if (Player.MirrorBattlesWon.indexOf(2) > -1) {
     mapText += "<button class='mirrorMapButton' onclick='mirrorBattle(3)'>"; 
     mapText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/mirror.png' alt='Mirror' height=50> <br />";
     mapText += "Mirror Battle 3</button>";
  }
     if (Player.MirrorBattlesWon.indexOf(3) > -1) {
     mapText += "<button class='mirrorMapButton' onclick='mirrorBattle(4)'>"; 
     mapText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/mirror.png' alt='Mirror' height=50> <br />";
     mapText += "Mirror Battle 4</button>";
  }
       if (Player.MirrorBattlesWon.indexOf(4) > -1) {
     mapText += "<button class='mirrorMapButton' onclick='mirrorBattle(5)'>"; 
     mapText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/mirror.png' alt='Mirror' height=50> <br />";
     mapText += "Mirror Battle 5</button>";
  }
         if (Player.MirrorBattlesWon.indexOf(5) > -1) {
     mapText += "<button class='mirrorMapButton' onclick='mirrorBattle(6)'>"; 
     mapText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/mirror.png' alt='Mirror' height=50> <br />";
     mapText += "Mirror Battle 6</button>";
  }
  mapText += "</div>";
  let PlayerStats = "XP: " + Player.XP + "<br />";
  PlayerStats += "Gold: " + Player.Gold + "<br />";
  
  document.getElementById("leftSide").innerHTML = mapText;
  document.getElementById("middle").innerHTML = "";
  document.getElementById("rightSide").innerHTML = PlayerStats;
  document.getElementById("interactions").innerHTML = "";
}

//mirrorBattle(1);
hermit();
