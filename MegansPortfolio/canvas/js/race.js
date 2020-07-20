var canvas, convasContext;

let track = "";
let trackType;
let playAgainBtn = document.getElementById("playAgainBtn");
let stop;
let rules = document.getElementById("rules")
let showRulesBtn = document.getElementById("showRules")
let hideRulesBtn = document.getElementById("hideRules")
let welcome = document.getElementById("welcome")

function showRules() {
    rules.style.display = "block";
    showRulesBtn.style.display = "none";
    hideRulesBtn.style.display = "block";
}

function hideRules() {
    rules.style.display = "none";
    showRulesBtn.style.display = "block";
    hideRulesBtn.style.display = "none";
}

function countLoadReadyLaunch() {
    picsToLoad--;
        if(picsToLoad == 0) {
            startGame();
        }
}

function getTrackReady() {
    trackType.style.display = "none"
    welcome.style.display = "none";
}

function loadNewtrack() {
    trackType = document.getElementById("pickTrack")

    if(weather1 == "Clear") {
        loadLevel(levelOne);
    } else if (weather1 == "Clouds") {
        loadLevel(levelTwo);
    } else if (weather1 == "Rain" || weather1 == "Thunderstorm") {
        loadLevel(levelThree);
    }

    getTrackReady();
}


window.onload = function() {
	canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    this.colorRect(0,0, canvas.width, canvas.height, "black");
    this.colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, "white")
    
    loadImages();
}

function setupInput() {
	document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    
    greenCar.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
    blueCar.setupInput(KEY_W, KEY_A, KEY_S, KEY_D);
}
function startGame() {
	var framesPerSecond = 30;
	stop = setInterval(updateAll, 1000/framesPerSecond);

    setupInput();
    
    loadLevel(welcomeTrack);
}

function playAgain() {
    trackType.style.display = "block"
    playAgainBtn.style.display = "none"
    theWinner.innerHTML = ""
    weatherDiv.innerHTML = ""
    city.value = ""
    welcome.style.display = "block";
    startGame();
}

function loadLevel(whichLevel) {
    trackGrid = whichLevel.slice();
    blueCar.reset(carPic, "Blue Storm");
    greenCar.reset(otherCarPic, "Green Machine");
}

function updateAll() {
	moveAll();
	drawAll();
}




function drawAll() {
    
	colorRect(0,0, canvas.width,canvas.height, 'black'); // clear screen

    drawTracks();
    blueCar.draw();
    greenCar.draw();

	
} 


