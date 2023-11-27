import dynamic from "next/dynamic";

const Calculator = dynamic(() => import("./Calculator"));
const Stocks = dynamic(() => import("./Stocks"));
const Weather = dynamic(() => import("./Weather"));

type PropType = {
  inputValue: string;
};

const Widget: React.FC<PropType> = ({ inputValue }) => {
  const isMathExpression = /[+\-*/]/.test(inputValue);
  const isWeatherExpression = /weather/i.test(inputValue);
  const isStocksExpression = /stocks/i.test(inputValue);

  if (isMathExpression) return <Calculator />;
  else if (isWeatherExpression) return <Weather />;
  else if (isStocksExpression) return <Stocks />;
  else return null;
};

export default Widget;
