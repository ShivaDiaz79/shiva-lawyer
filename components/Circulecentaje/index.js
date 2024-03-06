import React, { useEffect, useState } from 'react';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

const Circulecentage = () => {
  const [percent, setPercent] = useState(25);
  const [data, setData] = useState([{ x: 1, y: 25 }, { x: 2, y: 75 }]);

  useEffect(() => {
    const setStateInterval = setInterval(() => {
      let newPercent = percent + (Math.random() * 25);
      newPercent = newPercent > 100 ? 0 : newPercent;
      setPercent(newPercent);
      setData([{ x: 1, y: newPercent }, { x: 2, y: 100 - newPercent }]);
    }, 2000);

    return () => {
      clearInterval(setStateInterval);
    };
  }, [percent]);

  const getColor = () => {
    return percent > 50 ? "green" : "red";
  };

  return (
    <div>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={400}
          height={400}
          data={data}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => (datum.x === 1 ? getColor() : "transparent"),
            },
          }}
        />
        <VictoryAnimation duration={1000} data={{ percent }}>
          {(newProps) => (
            <VictoryLabel
              textAnchor="middle"
              verticalAnchor="middle"
              x={200}
              y={200}
              text={`${Math.round(newProps.percent)}%`}
              style={{ fontSize: 45 }}
            />
          )}
        </VictoryAnimation>
      </svg>
    </div>
  );
};

export default Circulecentage;
