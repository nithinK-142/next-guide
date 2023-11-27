import calculator from "@/assets/calculator.png";
import Image from "next/image";

const Calculator = () => {
  return (
    <div>
      <Image src={calculator} alt="calculator" width={1080} height={1080} />
    </div>
  );
};

export default Calculator;