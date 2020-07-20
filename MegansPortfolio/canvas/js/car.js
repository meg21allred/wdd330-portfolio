var blueCar = new carClass();
var greenCar = new carClass();

const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87;
const KEY_A= 68;
const KEY_S = 83;
const KEY_D = 65;


var carPic = document.createElement("img");
var otherCarPic = document.createElement("img");
var trackPics = [];
var picsToLoad = 0; //set automatically based on imageList in loadImages()
var lap = 0;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.08;
const MIN_SPEED_TO_TRUN = 0.5;

function carClass() {
    
    this.x = 75;
    this.y = 75;
    this.ang = 0;
    this.speed = 0;
    this.myCarPic; //which car picture to use
    this.name; //Whcih car are we refering to

    this.keyHeld_Gas = false;
    this.keyHeld_Reverse = false;
    this.keyHeld_TurnLeft = false;
    this.keyHeld_TurnRight = false;

    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;

    this.setupInput = (upKey, rightKey, dowKey, leftKey) => {
        this.controlKeyUp = upKey;
        this.controlKeyRight = rightKey;
        this.controlKeyDown = dowKey;
        this.controlKeyLeft = leftKey;
    }


    this.reset = (whichImage, carName) => {
        this.name = carName;
        this.myCarPic = whichImage;
        this.speed = 0;

        for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
            for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
                if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
                    trackGrid[arrayIndex] = TRACK_ROAD;
                    this.ang = -Math.PI/2
                    this.x = eachCol * TRACK_W + TRACK_W/2;
                    this.y = eachRow * TRACK_H + TRACK_H/2;
                    return;
                } // end of player start if
            } // end of col for
        } // end of row for
    } // end of carReset func

    this.move = () => {
        this.speed *= GROUNDSPEED_DECAY_MULT;
    
        if(this.keyHeld_Gas) {
            this.speed += DRIVE_POWER;
        }
        if(this.keyHeld_Reverse) {
            this.speed -= REVERSE_POWER;
        }
        if(Math.abs(this.speed) > MIN_SPEED_TO_TRUN) {
            if(this.keyHeld_TurnRight) {
                this.ang += TURN_RATE;
            }
            if(this.keyHeld_TurnLeft) {
                this.ang -= TURN_RATE;
            }
        }
        
        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;

        carTrackHandling(this, welcomeTrack);
        
    }

    this.draw = () => {
		drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y, this.ang);
    }

} // end of car class

function keySet(keyEvent, whichCar, setTo) {
    

    if(keyEvent.keyCode == whichCar.controlKeyLeft) {
        whichCar.keyHeld_TurnLeft = setTo;
    }
    if(keyEvent.keyCode == whichCar.controlKeyRight) {
        whichCar.keyHeld_TurnRight = setTo;
    }
    if(keyEvent.keyCode == whichCar.controlKeyUp) {
        whichCar.keyHeld_Gas = setTo;
    }
    if(keyEvent.keyCode == whichCar.controlKeyDown) {
        whichCar.keyHeld_Reverse = setTo;
    }

}

function keyPressed(evt) {
    keySet(evt, blueCar, true);
    keySet(evt, greenCar, true);
}

function keyReleased(evt) {
    keySet(evt, blueCar, false);
    keySet(evt, greenCar, false);
}
