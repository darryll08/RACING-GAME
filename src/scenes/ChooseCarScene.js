import Phaser from "phaser";

export default class ChooseCarScene extends Phaser.Scene {
    constructor(){
        super ('choose-car-scene')
    }

    init(){
        this.car = undefined
        this.car_temp1 = undefined
        this.car_temp2 = undefined
        this.car_temp3 = undefined
    }

    preload(){
      this.load.image('background', 'images/bg_layer1.png')
      this.load.image('car1', 'images/car.png')
      this.load.image('car2', 'images/car2.png')
      this.load.image('car3', 'images/car3.png')
    }

    create(){
      // background
      const gameWidth = this.scale.width * 0.5;
      const gameHeight = this.scale.height * 0.5;
      this.add.image(gameWidth, gameHeight, 'background')

      // Text for choose car
      this.add.text(100, 100, 'CHOOSE YOUR CAR', { fontSize: '32px', color: '#000' })

      // make a choose car menu
      this.car_temp1 = this.physics.add.sprite(120, 400, 'car1').setInteractive().setScale(0.35)
      this.car_temp2 = this.physics.add.sprite(240, 400, 'car2').setInteractive().setScale(0.15)
      this.car_temp3 = this.physics.add.sprite(360, 400, 'car3').setInteractive().setScale(0.15)

      this.car_temp1.once('pointerup', () => {
        this.car = this.car_temp1
        this.scene.start('racing-scene', { car: this.car })
      })

      this.car_temp2.once('pointerup', () => {
        this.car = this.car_temp2
        this.scene.start('racing-scene', { car: this.car })
      })

      this.car_temp3.once('pointerup', () => {
        this.car = this.car_temp3
        this.scene.start('racing-scene', { car: this.car })
      })
    }

    update(){

    }
}