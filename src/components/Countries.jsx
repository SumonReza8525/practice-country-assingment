import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
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

  if (loading) return <h3>Loading,,,</h3>;
  if (error) return <h3>Error : {error}</h3>;
  //   console.log(countries.countries);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-6 bg-gray-100 w-[90vw] mx-auto">
      {countries.map((country) => (
        <Country key={country.ccn3.ccn3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
