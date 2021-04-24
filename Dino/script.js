const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

    } else {

        // setTimeout - позволяет вызвать функцию один раз через определенный интервал варемени
        setTimeout(function() {
            dino.classList.remove("jump")
        }, 100);

    }
}

let isAlive = setInterval(() => {

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("game over!")
    }

}, 10);