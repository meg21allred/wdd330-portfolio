const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// //fillRect() 
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);

// // strokeRect() 
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100)

// //clearRect()
// ctx.clearRect(25, 25, 140, 90)

// //fill text()
// ctx.font = '30px Arial'
// ctx.fillStyle = 'blue'
// ctx.fillText('Hello World', 400, 50);

// //strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'orange';
// ctx.strokeText('Megan Allred', 400, 100);

// // Paths
// //triangle 
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
// ctx.fillStyle = 'coral';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();

// //rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'teal';
// ctx.fill();

// //Using arcs to draw a smiley face
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// ctx.beginPath();

// //Draw head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// //move to mouth
// ctx.moveTo(centerX + 100, centerY )

// // Draw mouth
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// //Left Eye
// ctx.moveTo(centerX - 60, centerY - 80)
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// //Right Eye
// ctx.moveTo(centerX + 100, centerY - 80);
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2 );


// ctx.stroke();

//Animation 1
const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5,
    dy: 4
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'purple';
    ctx.fill();
}

// function updateCircle() {
//     ctx.clearRect(0,0, canvas.width, canvas.height);
//     drawCircle();
//     //change postions
//     circle.x += -circle.dx;
//     circle.y += circle.dy;

//     //detect side walls
//     if (circle.x + circle.size > canvas.width || circle.x -
//         circle.size < 0) {
//         circle.dx *= - 1; 
//     }

//     //Detect top and bottom walls
//     if (circle.y + circle.size > canvas.height|| circle.y -
//         circle.size < 0) {
//         circle.dy *= - 1; 
//     }

//     requestAnimationFrame(updateCircle);
// }

// updateCircle();

//Animation 2 - Character
const image = document.getElementById('source');

const player = {
    w: 50,
    h: 80,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
}

function drawPlayer() {
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height )
}

function newPos() {
    player.x += player.dx;
    player.y += player.dy;

    dectectWalls();
}

function dectectWalls() {
    if (player.x < 0) {
        player.x = 0;
    } else if (player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w;

    } else if ( player.y < 0) {
        player.y = 0;
    } else if ( player.y + player.h > canvas.height) {
        player.y = canvas.height - player.h;
    }
}

function update() {
    //ctx.clearRect(0,0, canvas.width, canvas.height);
    clear();
    drawCircle();
    drawPlayer();

    //players position
    newPos();
    //change postions
    circle.x += -circle.dx;
    circle.y += circle.dy;

    //detect side walls
    if (circle.x + circle.size > canvas.width || circle.x -
        circle.size < 0) {
        circle.dx *= - 1; 
    }

    //Detect top and bottom walls
    if (circle.y + circle.size > canvas.height|| circle.y -
        circle.size < 0) {
        circle.dy *= - 1; 
    }
    
    // if (circle.y == player.y - player.h || circle.x == player.x - player.w) {
    //     alert('You have been hit!')
    // }
   
    
    requestAnimationFrame(update);
}

function moveUp() {
    player.dy = -player.speed;
}

function moveDown() {
    player.dy = player.speed;
}

function moveRight() {
    player.dx = player.speed;
}

function moveLeft() {
    player.dx = -player.speed;
}

function keyDown(e) {
    if(e.key === 'ArrowRight' || e.key === 'ArrowRight') {
        moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

function keyUp(e) {
    if (
        e.key == 'ArrowRight' || 
        e.key == 'Right' ||
        e.key == 'ArrowLeft' ||
        e.key == 'Left' ||
        e.key == 'ArrowUp' ||
        e.key == 'Up' ||
        e.key == 'ArrowDown' ||
        e.key == 'Down' 
     ) {
        player.dx = 0;
        player.dy = 0;
    }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);