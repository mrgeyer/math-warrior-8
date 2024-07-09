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
  document.getElementById("middle").innerHTML = "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/mirror.png' alt='Mirror' width=100 height=300>";
  if (level === 1) {
    let lc = Math.ceil(Math.random() * 9);
    let rc = Math.ceil(Math.random() * 9);
    equationLeftSide = [x, {degree: 0, coefficient: lc}];
    equationRightSide = [{degree: 0, coefficient: rc}];
  }
    updateMirrorBattle();
    let buttonText = "<table><tr><th>Select your attack below. Click the number to choose your attack power.</th></tr>";
    buttonText += "<tr><td class='redweapon'>";
    buttonText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/subduer.png' alt='subtract' height=25>";
    for (let i = 1; i < 10; i++) {
      buttonText += "<button class='redbutton' onclick=subCon(" + i + ")>" + i + "</button>;
    }
    buttonText += "</td></tr>";
    if (Player.MirrorBattlesWon.indexOf(1) > -1) {
      buttonText += "<tr><td class='blueweapon'>";
      buttonText += "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/addler.png' alt='add' height=25>";
      for (let i = 1; i < 10; i++) {
        buttonText += "<button class='bluebutton' onclick=addCon(" + i + ")>" + i + "</button>";
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
    if(equationRightSide[i].degree === 1 && equationLeftSide[i].coefficient === 1){
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

function hermit() {
  let hermitPic = "<img src='https://raw.githubusercontent.com/mrgeyer/math-warrior-adv/main/image/hermit.png' alt='Hermit'>";
  let hermitTalk = "Hermit: Hello, adventurer. Stay awhile and listen.<br />";
  if (Player.MirrorBattlesWon.indexOf(1) === -1) {
  hermitTalk += "Hermit: Mirrorland is being attacked by thieves and convicts.<br />";
  hermitTalk += "Hermit: It's dangerous to go alone. Talk this.<br />";
  hermitTalk += "*** You receive the Subduer dagger. ***<br />";
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
  } else {
  hermitTalk += "Hermit: It's dangerous to go alone. Talk this.<br />";
  hermitTalk += "*** You receive the Addler sword. ***<br />";
  hermitTalk += "Hermit: Now you can defeat those pesky Red Cons.<br />";
  hermitTalk += "Hermit: The Addler works like the Subduer. However, the Addler does damage to Red Cons and heals Blue Cons.<br />";
  hermitTalk += "Hermit: Remember to focus your attacks on Cons that are on the same side of the mirror as the treasure.<br />";
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
