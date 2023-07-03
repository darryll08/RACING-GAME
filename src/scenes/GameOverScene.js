import Phaser from 'phaser'

export default class GameOverScene extends Phaser.Scene {
  constructor(){
    super('game-over-scene')
  }

  init(data){
    this.replayButton = undefined;
    this.score = data.score
  }

  preload(){
    this.load.image('background', 'images/bg_layer1.png')
    this.load.image('Game-Over-Icon-PNG-File', 'images/Game-Over-Icon-PNG-File.png' )
    this.load.image('replay', 'images/replay.png')
  }

  create(){
    this.add.image(200, 320, 'background')
    this.add.text(150, 350, 'Score: ' + this.score, { fontSize: '32px', color: '#000' })
    this.replayButton = this.add.image(240, 430, 'replay').setInteractive() .setScale(0.25)

    this.replayButton.once('pointerup', () => {
      this.scene.start('choose-car-scene')
    }, this)

    this.add.image(240, 200, 'Game-Over-Icon-PNG-File').setScale(0.6)
    
  }

}