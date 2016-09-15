import { FIRST_ENTITY_ID } from 'engine/system';

export default class Engine {

  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.fps = 30;
    const entities = {
      addEntity(e) {
        this.values[e.id] = e;
      },
      values: {},
      [Symbol.iterator]() {
        return {
          i: FIRST_ENTITY_ID,
          next() {
            const val = (entities.values || {})[this.i++];
            return {value: val, done: Object.keys(entities.values).length + 1 === this.i};
          }
        };
      }
    };
    this.entities = entities;
    this.setupLoop();
  }

  setupLoop() {
    let lastTime = new Date().getTime();

    this.gameLoop = function() {
      var currentTime = (new Date()).getTime();
      var delta = (currentTime - lastTime) / 1000;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.update(delta, this.entities);
      this.draw();
      lastTime = currentTime;
      if (this.gameLoop.running) {
        window.requestAnimationFrame(this.gameLoop);
      }
    }.bind(this);
  }

  draw() {
    for(let entity of this.entities) {
      entity.draw(this.context);
    }
  }

  update(delta) {
    for(let entity of this.entities) {
      entity.update(delta, this.entities);
    }
  }

  start() {
    console.log('starting');
    this.gameLoop.running = true;
    this.gameLoop();
  }

  stop() {
    console.log('stopping');
    this.gameLoop.running = false;
  }

  addEntity(entity) {
    this.entities.addEntity(entity);
  }

};
