import React from "react";

const Country = ({ country }) => {
  console.log(country);

  return (
    <div className="border-2 border-green-600 p-3.5 bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300">
      <h2 className="text-xl font-bold text-gray-800">
        {country.name?.common}
      </h2>
      <img
        className="w-full h-50 object-cover"
        src={country.flags.flags?.svg}
        alt="Country flag"
      ></img>
      <div className="p-5 space-y-2">
        <p className="text-gray-600">
          <span className="font-semibold">Capital:</span>{" "}
          {country.capital.capital?.[0] || "N/A"}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">Region:</span> {country.region.region}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">Population:</span>{" "}
          {country.population?.population?.toLocaleString()}
        </p>

        <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Country;
