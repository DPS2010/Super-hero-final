var canvas = new fabric.Canvas("myCanvas")
 blockwidth = 30
 blockheight = 30
playerx = 100
 playery = 100
playerObject = ""
 powerObject = ""

function updatePlayer() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerObject)
    })
}

function updateBlock(power) {
    fabric.Image.fromURL(power, function (Img) {
        powerObject = Img;
        powerObject.scaleToWidth(blockwidth);
        powerObject.scaleToHeight(blockheight);
        powerObject.set ({
            top:playery,
            left:playerx
        });
        canvas.add(powerObject)
    })
}
window.addEventListener("keydown", kd)

function kd(e) {
x = e.keyCode
console.log(x)

if (x == 73) {
    updateBlock("ironman_face.png")
}
if (x == 72) {
    updateBlock("hulk_legs.png")
}
if (x == 83) {
    updateBlock("spiderman_body.png")
}
if (x == 67) {
    updateBlock("captain_america_left_hand.png")
}

if (x == 84) {
    updateBlock("thor_right_hand.png")
}


if (x == 37) {
    left()
}
if (x == 38) {
    up()
}
if (x == 39) {
    right()
}
if (x == 40) {
    down()
}
if(e.shiftKey == true && x == '80') { 
    console.log("p and shift pressed together");
     blockwidth = blockwidth + 10; 
     blockheight = blockheight + 10; 
     document.getElementById("width").innerHTML = blockwidth; 
     document.getElementById("height").innerHTML = blockheight; 
    } 
    if(e.shiftKey && x == '77') { 
        console.log("m and shift pressed together");
     blockwidth = blockwidth - 10; blockheight = blockheight - 10; 
     document.getElementById("width").innerHTML = blockwidth;
      document.getElementById("height").innerHTML = blockheight; }
    
}
function down() {
    if (playery <= 500) {
        playery = playery + blockheight
        canvas.remove(playerObject)
        updatePlayer()
    }
}
function up() {
    if (playery >= 0) {
        playery = playery - blockheight
        canvas.remove(playerObject)
        updatePlayer()
    }
}
function left() {
    if (playerx >= 0) {
        playerx = playerx - blockwidth
        canvas.remove(playerObject)
        updatePlayer()
    }
}
function right() {
    if (playerx <= 800) {
        playerx = playerx + blockwidth
        canvas.remove(playerObject)
        updatePlayer()
    }
}

