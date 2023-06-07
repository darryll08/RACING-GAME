import Phaser from "phaser";

export default class CarRacingScene extends Phaser.Scene {
    constructor(){
        super ('racing-scene')
    }

    init(){
        this.player = undefined
    }


    preload(){
        this.load.image('car', 'images/car.png')
        this.load.image('car2', 'images/car2.png')
        this.load.image('car3', 'images/car3.png')
        this.load.image('road', 'images/road.png')
        this.load.image('arrow_white', 'images/arrow_white.png')
        this.load.image('arrow_yellow', 'images/arrow_yellow.png')
        this.load.image('barrel_blue_down', 'images/barrel_blue_down.png')
        this.load.image('barrel_blue', 'images/barrel_blue.png')
        this.load.image('barrel_red_down', 'images/barrel_red_down.png')
        this.load.image('barrel_red', 'images/barrel_red.png')
        this.load.image('barrier_red', 'images/barrier_red.png')
        this.load.image('barrier_white', 'images/barrier_white.png')
        this.load.image('cone_down', 'images/cone_down.png')
        this.load.image('motor1', 'images/motor1.png')
        this.load.image('oil', 'images/oil.png')
        this.load.image('rock1', 'images/rock2.png')
        this.load.image('rock2', 'images/rock2.png')
        this.load.image('rock3', 'images/rock3.png')
        this.load.image('tree_large', 'images/tree_large.png')
        this.load.image('tree_small', 'images/tree_small.png')
        this.load.image('tribune_full', 'images/tribune_full.png')


    }


    create(){
       this.player = this.add.image(240, 320, 'car') 


    }


    update(){

    }


}