import '../css/styles.css';
import { KeyManager } from './keys';

export class Game {
  keyManager: KeyManager;
  constructor() {
    this.keyManager = new KeyManager();

    this.init();
  }

  init() {
    this.keyManager.setupKeys();
  }
}

let game: Game;

document.addEventListener('DOMContentLoaded', function() {
  game = new Game();
  (window as any).game = game;
});
