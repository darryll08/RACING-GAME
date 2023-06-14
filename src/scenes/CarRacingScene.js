import Phaser from "phaser";

export default class CarRacingScene extends Phaser.Scene {
    constructor(){
        super ('racing-scene')
    }

    init(data){
        this.player = data.car
        this.road = undefined
        this.cursor = undefined
        this.tribune_left = undefined
        this.tribune_right = undefined
    }


    preload(){
        this.load.image('background', 'images/bg_layer1.png')
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
      const gameWidth = this.scale.width * 0.5;
      const gameHeight = this.scale.height * 0.5;
      // background
      this.add.image(gameWidth, gameHeight, 'background')

      // add road
      this.road = this.physics.add.group({
        key: 'road',
        repeat: 5,
        setXY: { x: 240, y: 0, stepX: 0, stepY: 160 },
        setScale: { x: 3.5, y: 3.5 }
      })

      // add tribune on the left and right side of the road
      this.tribune_left = this.physics.add.group({
        key: 'tribune_full',
        repeat: 4,
        setXY: { x: 75, y: 0, stepX: 0, stepY: 220 },
        setScale: { x: 0.5, y: 0.5 }
      }).rotate(-1.5708).setDepth(1)

      this.tribune_right = this.physics.add.group({
        key: 'tribune_full',
        repeat: 4,
        setXY: { x: 405, y: 0, stepX: 0, stepY: 220 },
        setScale: { x: 0.5, y: 0.5 }
      }).rotate(1.5708).setDepth(1)

      // add car to the scene from ChooseCarScene
      this.player = this.physics.add.sprite(240, 500, this.player.texture.key)
      // set size of the car without scaling and setSize
      this.player.displayWidth = 50
      this.player.displayHeight = 100

      // set the car to collide with the world bounds so it doesn't go off screen
      this.player.setCollideWorldBounds(true)

      // make player move with arrow keys ( left and right )
      this.cursor = this.input.keyboard.createCursorKeys()

    }


    update(){
      // make player move with arrow keys ( left and right )
      if (this.cursor.left.isDown) {
        this.player.setVelocityX(-200)
      }
      else if (this.cursor.right.isDown) {
        this.player.setVelocityX(200)
      }
      else {
        this.player.setVelocityX(0)
      }

      // make the road move
      // @ts-ignore
      this.road.children.iterate((child) => {
        child.y += 30
        if (child.y > 720) {
          child.y = -160
        }
      })

      // make the tribune move
      // @ts-ignore
      this.tribune_left.children.iterate((child) => {
        child.y += 2
        if (child.y > 720) {
          child.y = -160
        }
      })

      // make the tribune move
      // @ts-ignore
      this.tribune_right.children.iterate((child) => {
        child.y += 2
        if (child.y > 720) {
          child.y = -160
        }
      })
    }


}