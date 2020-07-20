const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_COLS = 20;
const TRACK_GAP = 2;
const TRACK_ROWS = 15;
let welcomeTrack = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 
                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                    4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
                    4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
                    4, 4, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 4, 4,
                    4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 4, 4,
                    4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 4, 4,
                    4, 4, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 4, 4,
                    4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 4, 4,
                    4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 4, 4,
                    4, 4, 1, 0, 1, 0, 1, 2, 1, 2, 1, 1, 0, 1, 1, 0, 0, 1, 4, 4,
                    4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
                    4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

let levelOne =  [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 
                 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                 1, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 1, 1, 0, 0, 1,
                 1, 0, 0, 1, 4, 1, 1, 1, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 4, 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 1, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1,
                 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
                 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                 0, 3, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                 0, 3, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                 5, 1, 0, 0, 0, 1, 4, 4, 4, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1,
                 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4]

let levelTwo = [4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 
                8, 4, 8, 9, 0, 0, 8, 8, 4, 8, 0, 9, 0, 0, 0, 0, 0, 0, 8, 8,
                8, 8, 0, 0, 0, 9, 8, 4, 4, 8, 0, 0, 0, 0, 0, 0, 9, 9, 0, 8,
                8, 9, 0, 0, 0, 0, 0, 8, 8, 0, 0, 9, 0, 0, 8, 0, 0, 9, 0, 8,
                8, 0, 0, 8, 0, 0, 9, 0, 8, 0, 0, 0, 0, 8, 4, 8, 8, 0, 0, 8,
                8, 0, 9, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 4, 0, 0, 0, 8,
                8, 0, 0, 8, 4, 8, 0, 9, 0, 0, 9, 9, 8, 4, 8, 8, 0, 0, 8, 8,
                8, 9, 0, 8, 4, 4, 0, 8, 9, 8, 4, 8, 8, 8, 0, 0, 0, 0, 8, 4,
                8, 0, 0, 8, 8, 8, 4, 8, 8, 4, 4, 8, 8, 9, 0, 0, 0, 9, 8, 4,
                8, 0, 0, 0, 8, 4, 8, 8, 9, 0, 8, 8, 8, 0, 9, 0, 9, 0, 5, 8,
                8, 9, 0, 0, 0, 8, 8, 0, 0, 0, 8, 8, 4, 8, 0, 0, 0, 0, 3, 0,
                8, 8, 0, 0, 0, 0, 0, 9, 0, 0, 9, 8, 8, 0, 9, 0, 0, 0, 3, 0,
                8, 8, 4, 0, 0, 0, 0, 0, 0, 0, 8, 4, 8, 0, 0, 0, 9, 0, 5, 8,
                8, 4, 8, 8, 9, 0, 0, 0, 2, 2, 8, 4, 8, 4, 8, 8, 8, 8, 8, 8,
                8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 8, 8, 8, 4, 4, 8, 8]

let levelThree =[4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 
                 7, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 5, 7,
                 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
                 7, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 7,
                 7, 6, 0, 0, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 0, 0, 6, 7,
                 7, 0, 0, 0, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 0, 0, 0, 7,
                 7, 0, 0, 0, 7, 6, 6, 4, 4, 6, 4, 4, 4, 6, 6, 7, 0, 0, 0, 7,
                 7, 0, 0, 0, 7, 6, 4, 4, 4, 6, 4, 4, 4, 4, 6, 7, 0, 0, 0, 7,
                 7, 0, 0, 0, 7, 6, 6, 4, 4, 6, 4, 4, 4, 6, 6, 7, 0, 6, 0, 7,
                 7, 0, 2, 2, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 0, 0, 0, 7,
                 5, 7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 0, 0, 0, 7,
                 0, 3, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 7,
                 0, 3, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
                 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 7,
                 4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4]
    
var trackGrid = [];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_FLAG = 5;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_WATER = 6;
const TRACK_PURPLE_WALL = 7;
const TRACK_CLOUD = 8;
const TRACK_MUD = 9;

function beginLoadImages(imgVar, fileName) {
    imgVar.onload = countLoadReadyLaunch;
    imgVar.src = fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadImages(trackPics[trackCode], fileName);
    //console.log("img/" + fileName);
}

function loadImages() {
    var imageList = [
        {varName: carPic, theFile: "img/player1car.png"},
        {varName: otherCarPic, theFile: "img/player2car.png"},
        {trackType: TRACK_ROAD, theFile: "img/track_road.png"},
        {trackType: TRACK_WALL, theFile: "img/track_wall.png"},
        {trackType: TRACK_GOAL, theFile: "img/track_goal.png"},
        {trackType: TRACK_TREE, theFile: "img/track_tree.png"},
        {trackType: TRACK_FLAG, theFile: "img/track_flag.png"},
        {trackType: TRACK_WATER, theFile: "img/track_water.png"},
        {trackType: TRACK_PURPLE_WALL, theFile: "img/track_purpleWall.png"},
        {trackType: TRACK_CLOUD, theFile: "img/track_cloud.png"},
        {trackType: TRACK_MUD, theFile: "img/track_mud.png"}
    ];

    picsToLoad = imageList.length;

    for(var i = 0; i < imageList.length; i++){
        if(imageList[i].varName != undefined) {
            beginLoadImages(imageList[i].varName, imageList[i].theFile);
        } else {
            loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
        }
    }
}

function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS) {
		 var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return trackGrid[trackIndexUnderCoord];
	} else {
		return TRACK_WALL;
	}
}

function carTrackHandling(whichCar, level) {
	var carTrackCol = Math.floor(whichCar.x / TRACK_W);
    var carTrackRow = Math.floor(whichCar.y / TRACK_H);
    
	//var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

  

	if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
	   carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
           var tileHere = returnTileTypeAtColRow( carTrackCol,carTrackRow );
        
            if (tileHere == TRACK_WATER) {

                whichCar.speed *= 1.3;

            } else if(tileHere == TRACK_GOAL) {
                
                //console.log(whichCar.name + " WINS");
                clearInterval(stop)
                playAgainBtn.style.display = "block";

                theWinner = document.querySelector('.winner')

                theWinner.innerHTML = whichCar.name + " wins!"
                
                //loadLevel(level);
                //trackType.style.display = "block"
                
            

           } else if(tileHere == TRACK_MUD) {
               whichCar.speed *= 0.8;
           } else if(tileHere != TRACK_ROAD) {
            whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
            whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;

			whichCar.speed *= -0.5;
		} // end of track found
	} // end of valid col and row
} // end of carTrackHandling func

function moveAll() {
    blueCar.move();
    greenCar.move();
	
}

function rowColToArrayIndex(col, row) {
	return col + TRACK_COLS * row;
}

function drawTracks() {

    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

            
            var tileKindHere = trackGrid[arrayIndex];
            var useImage = trackPics[tileKindHere];

            canvasContext.drawImage(useImage, drawTileX,drawTileY)
            drawTileX += TRACK_W;
            
            arrayIndex++;

        } // end of for each track
        drawTileX = 0;
        drawTileY += TRACK_H;
	} // end of for each row

} // end of drawTracks func