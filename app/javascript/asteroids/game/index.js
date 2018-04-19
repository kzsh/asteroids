import Ball from 'asteroids/entities/ball'
import Spaceship from 'asteroids/entities/spaceship'
import { getWindowDimensions } from 'asteroids/utils/dom';
export default class Game {
  constructor({engine}) {
    this.engine = engine;


    for(let x = 0; x < 10; x++) {
      this.engine.addEntity(
        new Ball(
          getRandomPosition().x,
          getRandomPosition().y,
          getRandomVelocity(0.1).dx,
          getRandomVelocity(0.1).dy,
          Math.floor(Math.random() * 10),
          1,
          "#000")
      );
    }
    let started = true;
    this.start();
  }

  start() {
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }

}

function getRandomPosition() {
  const dim = getWindowDimensions();
  return {
    x: Math.floor(Math.random() * dim.w),
    y: Math.floor(Math.random() * dim.h)
  }
}

function getRandomVelocity(maxX, maxY) {
  if (!maxY) {
    maxY = maxX;
  }
  return {
    dx: (Math.random() * maxX * 5) - maxX,
    dy: (Math.random() * maxY * 5) - maxY
  }
}
