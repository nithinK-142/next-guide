import Calculator from "./Calculator";
import Stocks from "./Stocks";
import Weather from "./Weather";

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
