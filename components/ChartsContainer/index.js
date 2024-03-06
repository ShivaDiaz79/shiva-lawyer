import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryLabel } from 'victory';

const ChartsContainer = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <VictoryChart padding={{ left: 90, top: 50, right: 10, bottom: 50 }}>
        <VictoryLabel text="Altering padding" x={225} y={30} textAnchor="middle"/>
        <VictoryAxis dependentAxis
          tickFormat={[
            "first label",
            "second label",
            "third label",
            "forth label",
            "fifth label"
          ]}
        />
        <VictoryAxis/>
        <VictoryLine/>
      </VictoryChart>

      <VictoryChart>
        <VictoryLabel text="Multi-line labels" x={225} y={30} textAnchor="middle"/>
        <VictoryAxis dependentAxis
          tickFormat={[
            `first\nlabel`,
            `second\nlabel`,
            `third\nlabel`,
            `forth\nlabel`,
            `fifth\nlabel`
          ]}
        />
        <VictoryAxis/>
        <VictoryLine/>
      </VictoryChart>

      <VictoryChart>
        <VictoryLabel text="Angled labels" x={225} y={30} textAnchor="middle"/>
        <VictoryAxis dependentAxis
          style={{ tickLabels: { angle: -60 } }}
          tickFormat={[
            "first label",
            "second label",
            "third label",
            "forth label",
            "fifth label"
          ]}
        />
        <VictoryAxis/>
        <VictoryLine/>
      </VictoryChart>
    </div>
  );
};

export default ChartsContainer;
