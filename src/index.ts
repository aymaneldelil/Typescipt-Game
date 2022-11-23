
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";


//Import Images;

import PADDLE_IMAGE from "./assets/paddle.png";
import BALL_IMAGE from "./assets/ball.png";
//Level and Colors ; 

import {
    PADDLE_SPEED,
    PADDLE_STARTX,
    PADDLE_HEIGHT,
    PADDLE_WIDTH,
    BALL_SIZE,
    BALL_STARTX,
    BALL_SPEED,
    BALL_STARTY
} from "./setup";

//=================================================//
let gameOver: boolean = false;
let score: number = 0;
//=================================================//
const setGameOver = (view: CanvasView) => {
    view.drawInfo("Game Over");
    gameOver = false;
};
//=================================================//
const setGameWin = (view: CanvasView) => {
    view.drawInfo('Game Won!');
    gameOver = false;
}
//=================================================//
const gameLoop = (
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    ball: Ball,
) => {}
//=================================================//
const startGame=(view:CanvasView)=>{}

//=================================================//
//Create View

const newView = new CanvasView('#playField');
newView.inintStartButton(startGame);