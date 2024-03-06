import React, { useState } from 'react';
import { VictorySharedEvents, VictoryBar, VictoryPie, VictoryLabel } from 'victory';

const ChartApp = () => {
  const [externalMutations, setExternalMutations] = useState(undefined);

  const removeMutation = () => {
    setExternalMutations(undefined);
  };

  const clearClicks = () => {
    setExternalMutations([
      {
        childName: ["bar", "pie"],
        target: ["data"],
        eventKey: "all",
        mutation: () => ({ style: undefined }),
        callback: removeMutation
      }
    ]);
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    marginTop: "10px"
  };

  return (
    <div>
      <button onClick={clearClicks} style={buttonStyle}>
        Reset
      </button>
      <svg viewBox="0 0 450 350">
        <VictorySharedEvents
          externalEventMutations={externalMutations}
          events={[{
            childName: ["pie", "bar"],
            target: "data",
            eventHandlers: {
              onClick: () => {
                return [{
                  childName: ["pie", "bar"],
                  mutation: (props) => {
                    return {
                      style: Object.assign({}, props.style, { fill: "tomato" })
                    };
                  }
                }];
              }
            }
          }]}
        >
          <g transform={"translate(150, 50)"}>
            <VictoryBar name="bar"
              width={300}
              standalone={false}
              style={{
                data: { width: 20 },
                labels: { fontSize: 25 }
              }}
              data={[
                { x: "a", y: 2 }, { x: "b", y: 3 }, { x: "c", y: 5 }, { x: "d", y: 4 }
              ]}
              labels={["a", "b", "c", "d"]}
              labelComponent={<VictoryLabel y={290} />}
            />
          </g>
          <g transform={"translate(0, -75)"}>
            <VictoryPie name="pie"
              width={250}
              standalone={false}
              style={{ labels: { fontSize: 25, padding: 10 } }}
              data={[
                { x: "a", y: 1 }, { x: "b", y: 4 }, { x: "c", y: 5 }, { x: "d", y: 7 }
              ]}
            />
          </g>
        </VictorySharedEvents>
      </svg>
    </div>
  );
};

export default ChartApp;
