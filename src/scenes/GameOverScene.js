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
  }

  create(){
    this.add.image(200, 320, 'background')
    this.add.text(180, 240, 'Score: ' + this.score, { fontSize: '32px', color: '#000' })
    this.replayButton = this.add.text(180, 300, 'Replay', { fontSize: '32px', color: '#000' }).setInteractive()

    this.replayButton.once('pointerup', () => {
      this.scene.start('choose-car-scene')
    }, this)
  }

}