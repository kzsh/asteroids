import React from 'react';

import Game from 'asteroids/game';
import Engine from 'engine';
import { getWindowDimensions } from 'asteroids/utils/dom';

const Canvas = React.createClass({

  render() {
    const dimensions = getWindowDimensions();
    const styles = {
      height: dimensions.h,
      width: dimensions.w
    }
    return (
        <canvas ref={
          (canvas) => {
            new Game({
              engine: new Engine(canvas)
            }).start();
          }
        } style={styles}></canvas>
    );
  }

});

export default Canvas;