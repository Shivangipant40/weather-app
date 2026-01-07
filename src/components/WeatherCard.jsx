import React from 'react'

function WeatherCard({ data }) {
  console.log(data);

  const tempC = data?.main?.temp
    ? (data.main.temp - 273.15).toFixed(1)
    : "--";

  const maxTemp = data?.main?.temp_max
    ? (data.main.temp_max - 273.15).toFixed(1)
    : "--";

  const minTemp = data?.main?.temp_min
    ? (data.main.temp_min - 273.15).toFixed(1)
    : "--";

  return (
    <div className="h-screen pb-20 flex justify-center items-center">
      {/* Weather Card */}
      <div className=" w-[340px] rounded-2xl bg-amber-100/90 p-6 shadow-xl border border-amber-300">
        
        {/* Location */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-amber-900">
            {data?.name || "City"}
          </h1>
          <p className="text-sm text-amber-700">
            {data?.sys?.country || "--"}
          </p>
        </div>

        {/* Main Temperature */}
        <div className="flex justify-center items-center mb-6">
          <span className="text-6xl font-extrabold text-amber-900">
            {tempC}°
          </span>
          <span className="ml-2 text-xl text-amber-800">C</span>
        </div>

        {/* Min / Max */}
        <div className="flex justify-between text-center">
          <div className="flex-1">
            <p className="text-sm text-amber-700">Min</p>
            <p className="text-lg font-semibold text-amber-900">
              {minTemp}°
            </p>
          </div>

          <div className="flex-1">
            <p className="text-sm text-amber-700">Max</p>
            <p className="text-lg font-semibold text-amber-900">
              {maxTemp}°
            </p>
          </div>
        </div>

        {/* Extra Info */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-amber-800">
          <div className="bg-amber-200/60 rounded-lg p-3 text-center">
            Humidity
            <p className="font-semibold">
              {data?.main?.humidity ?? "--"}%
            </p>
          </div>

          <div className="bg-amber-200/60 rounded-lg p-3 text-center">
            Wind
            <p className="font-semibold">
              {data?.wind?.speed ?? "--"} m/s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default WeatherCard