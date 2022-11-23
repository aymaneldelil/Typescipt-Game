import { Vector } from "../types";
export class Brick {

    private brickImage: HTMLImageElement = new Image();




    constructor(
        private brickWidth: number,
        private brickHeight: number,
        private position: Vector,
        private brickEnergy: number,
        image: string

    ) {
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.position = position;
        this.brickEnergy = brickEnergy;
        this.brickImage.src = image;
    }

    get getWidth(): number {
        return this.brickWidth;
    };
    
    get getheight(): number {
        return this.brickHeight;
    };

    get getPosition():Vector{
        return this.position;
    };

    get getImage():HTMLImageElement{
        return this.brickImage;
    };

    get getEnergy():number{
        return this.brickEnergy
    }





}
