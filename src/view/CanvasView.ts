
import { Brick } from "../sprites/Brick";
import { Paddle } from "../sprites/Paddle";
import { Ball } from "../sprites/Ball";

export class CanvasView {
    public canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasName: string) {

        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info')

        // End Of Constractor 
    }


    clear(): void {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
    };

    //Provide a Function that whit trigger when click on a buttom
    inintStartButton(startFunction: (view: CanvasView) => void): void {
        this.start?.addEventListener("click", () => startFunction(this))
    }
    /// Score Display
    drawScore(score: number): void {
        if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }


    //Game  Info : like Game Over 
    drawInfo(text: string): void {
        if (this.info) this.info.innerHTML = text;
    };

    drawSprite(brick:Brick):void{

        if(!brick) return ; 
        this.context?.drawImage(
            brick.getImage ,
            brick.getPosition.x,
            brick.getPosition.y,
            brick.getWidth,
            brick.getheight
        );

    }
 

/// Th

    drawBrick(bricks:Brick[]):void{
        bricks.forEach(brick => this.drawSprite(brick))
    }

}

