import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [totalVisit, setTotalVisit] = useState([]);

  const handleTotalVisit = (country) => {
    // console.log(country.name.common);
    const newVisitedCountry = [...totalVisit, country];
    setTotalVisit(newVisitedCountry);
  };

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://openapi.programming-hero.com/api/all");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setCountries(data.countries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading)
    return (
      <h3 className="w-full h-screen flex justify-center items-center text-2xl font-bold font-serif">
        Loading
      </h3>
    );
  if (error) return <h3>Error : {error}</h3>;
  //   console.log(countries.countries);

  return (
    <div>
      <ol>
        {totalVisit.map((country) => (
          <li key={country.ccn3.ccn3}>{country.name.common}</li>
        ))}
      </ol>

      <h2>Total visited Country : {totalVisit.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-6 bg-gray-100 w-[90vw] mx-auto border-2">
        {countries.map((country) => (
          <Country
            handleTotalVisit={handleTotalVisit}
            key={country.ccn3.ccn3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
