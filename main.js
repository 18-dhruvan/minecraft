canvas = new fabric.Canvas("minecraft");
player_x = 100;
player_y = 100;
block_width = 30;
block_height = 30;
var player_object = "";
var block_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x

        });
        canvas.add(player_object)
    })
}
function block_update(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x

        });
        canvas.add(block_object)
    });
}


window.addEventListener("keydown", MyKeydown);
function MyKeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed)
    if (keypressed == "67") {
        block_update("cloud.jpg");
    }
    if (keypressed == "76") {
        block_update("light_green.png");
    }
    if (keypressed == "68") {
        block_update("dark_green.png");
    }
    if (keypressed == "71") {
        block_update("ground.png");
    }
    if (keypressed == "82") {
        block_update("roof.jpg");
    }
    if (keypressed == "84") {
        block_update("trunk.jpg");
        console.log("t")
    }
    if (keypressed == "85") {
        block_update("unique.png");
    }
    if (keypressed == "87") {
        block_update("wall.jpg");
    }
    if (keypressed == "89") {
        block_update("yellow_wall.png");
    }
    if (keypressed=="69"){
        block_update("white.jpg");
    }
    if (e.shiftKey == true && keypressed == "80") {
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width
        document.getElementById("current_height").innerHTML = block_height
    }



    if (e.shiftKey == true && keypressed == "77") {
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width
        document.getElementById("current_height").innerHTML = block_height
    }
  if (keypressed=="37") {
      left();
  }  
  if (keypressed=="38"){
      up();
  }
  if (keypressed=="39"){
     right()
}
  if (keypressed=="40"){
      down()
  }




}

function left(){
    player_x= player_x-block_width;
    canvas.remove(player_object)
    player_update()
}
function right(){
    player_x= player_x+block_width;
    canvas.remove(player_object)
    player_update()
}

function up(){
    player_y= player_y-block_height;
    canvas.remove(player_object)
    player_update()
}

function down(){
    player_y= player_y+block_height;
    canvas.remove(player_object)
    player_update()
}

