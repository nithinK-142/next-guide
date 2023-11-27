import stocks from "@/assets/stocks.png";
import Image from "next/image";

const Stocks = () => {
  return (
    <div>
      <Image src={stocks} alt="stocks" width={1080} height={1080} />
    </div>
  );
};

export default Stocks;
