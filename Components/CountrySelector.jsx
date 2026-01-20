"use client";

export default function CountrySelector({ setCountry }) {
  return (
    <div className="">
      <select
        id="country-select"
        onChange={(e) => setCountry(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
      >
        <option value="" disabled>
          Choose a country
        </option>
        <option value="us">USA</option>
        <option value="gb">UK</option>
        <option value="in">INDIA</option>
        <option value="bd">BANGLADESH</option>
      </select>
    </div>
  );
}
