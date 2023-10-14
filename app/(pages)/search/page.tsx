"use client";
import { useState } from "react";

export default function Search() {
  const [guidQuery, setGuidQuery] = useState("");
  const [attributeDataQuery, setAttributeDataQuery] = useState("");
  const [results, setResults] = useState<any[]>([]); // Replace any with your data type

  const handleSearch = async () => {
    // Fetch results from API (to be implemented)
  };

  return (
    <div className="w-4/5 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transform -translate-y-1/2">
      <div className="mb-4 max-w-xl">
        <label
          htmlFor="guid"
          className="block text-gray-700 dark:text-gray-300 mb-2">
          Search by GUID:
        </label>
        <input
          type="text"
          value={guidQuery}
          onChange={(e) => setGuidQuery(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter GUID"
        />
      </div>

      <div className="mb-4 max-w-xl">
        <label
          htmlFor="selector"
          className="block text-gray-700 dark:text-gray-300 mb-2">
          Selector:
        </label>

        <div className="w-full flex items-center">
          <select
            id="selector"
            className="border p-2 rounded mr-2 w-1/3"
            defaultValue="any">
            <option value="any">Any</option>
            {/* Additional options will be added here later */}
          </select>

          <input
            type="text"
            value={attributeDataQuery}
            onChange={(e) => setAttributeDataQuery(e.target.value)}
            className="w-2/3 p-2 border rounded"
            placeholder="Value"
          />
        </div>
      </div>

      <div className="flex justify-end max-w-xl">
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </div>

      <ul className="mt-4">
        {results.map((result, index) => (
          <li
            key={index}
            className={`p-4 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
            } dark:bg-gray-900`}>
            {/* Render your result data here */}
          </li>
        ))}
      </ul>
    </div>
  );
}
