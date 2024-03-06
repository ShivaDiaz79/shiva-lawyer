import React from 'react';
import { VictoryChart, VictoryScatter } from 'victory';
import { range, random } from 'lodash';

class ScatterChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scatterData: this.getScatterData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        scatterData: this.getScatterData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getScatterData() {
    const colors = [
      "violet", "cornflowerblue", "gold", "orange",
      "turquoise", "tomato", "greenyellow"
    ];
    const symbols = [
      "circle", "star", "square", "triangleUp",
      "triangleDown", "diamond", "plus"
    ];
    return range(25).map((index) => {
      const scaledIndex = Math.floor(index % 7);
      return {
        x: random(10, 50),
        y: random(2, 100),
        size: random(8) + 3,
        symbol: symbols[scaledIndex],
        fill: colors[random(0, 6)],
        opacity: 0.6
      };
    });
  }

  render() {
    return (
      <VictoryChart animate={{ duration: 2000, easing: "bounce" }}>
        <VictoryScatter
          data={this.state.scatterData}
          style={{
            data: {
              fill: ({ datum }) => datum.fill,
              opacity: ({ datum }) => datum.opacity
            }
          }}
        />
      </VictoryChart>
    );
  }
}

export default ScatterChart;
