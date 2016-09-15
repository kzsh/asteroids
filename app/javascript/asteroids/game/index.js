export default class Game {
  constructor({engine}) {
    this.engine = engine;

  }

  start() {
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }

}
