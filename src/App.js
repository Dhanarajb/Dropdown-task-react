import React, { useState, useEffect } from "react";
// import './style.css';

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    console.log(country[0]);
  }, [country]);
  return (
    <div>
      <select value={country} onChange={(e) => setCountry([e.target.value])}>
        {countries.map((item) => (
          <option value={item.cities}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}
