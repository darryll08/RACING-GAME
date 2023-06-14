import Phaser from 'phaser'

import HelloWorldScene from './scenes/CarRacingScene'
import CarRacingScene from './scenes/CarRacingScene'
import ChooseCarScene from './scenes/ChooseCarScene'

const config = {
	type: Phaser.AUTO,
	width: 480,
	height: 640,
	physics: {
		default: 'arcade',
		// arcade: {
		// 	gravity: { y: 200 }
		// }
	},
	scene: [ChooseCarScene, CarRacingScene],
	scale : {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	  }
}

export default new Phaser.Game(config)
