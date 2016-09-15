import { makeId } from 'engine/system';

export default class Entity {
  constructor() {
    let id = makeId();
    let x = null;
    let y = null;

    Object.defineProperty(this, 'id', {
      enumerable: false,
      configurable: false,
      get() {
      return id;
      }
    });

    Object.defineProperty(this, 'x', {
      enumerable: true,
      configurable: false,
      writable: true,
      value: null
    });

    Object.defineProperty(this, 'y', {
      enumerable: true,
      configurable: false,
      writable: true,
      value: null
    });
  }

  draw() {

  }

  update() {

  }

}
