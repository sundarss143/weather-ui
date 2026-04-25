type Props = {
  weather: {
    city: string;
    temp: number;
    condition: string;
    humidity: number;
    wind: number;
  };
};

const WeatherCard = ({ weather }: Props) => {
  return (
    <div className="mt-6 bg-white/25 backdrop-blur-md rounded-2xl p-6 text-white shadow-xl">
      <h2 className="text-3xl font-bold">{weather.city}</h2>
      <p className="text-5xl font-bold my-3">{weather.temp}°C</p>
      <p className="text-xl">{weather.condition}</p>

      <div className="flex justify-between mt-5 text-sm">
        <p>💧 {weather.humidity}%</p>
        <p>🌬 {weather.wind} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;