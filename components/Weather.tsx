import weather from "@/assets/weather.png";
import Image from "next/image";

const Weather = () => {
  return (
    <div>
      <Image src={weather} alt="weather" width={1080} height={1080} />
    </div>
  );
};

export default Weather;
