document.addEventListener("DOMContentLoaded",function (e) {
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
})
  
function jump() {
    dino.classList.add("jump");
    setTimeout(function () {
        dino.classList.remove("jump");
        
    },1000);
    
}

document.addEventListener("keydown",function(e) {
     if(e.key==" ")
     jump();
});

let collision = setInterval(function () {
    //position Y dino
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //position X dino
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //collision
    if(cactusLeft< 70 && dinoTop== 335)
    alert("Game over!");
    
   
    
},10);

