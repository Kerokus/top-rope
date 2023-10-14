"use client";
import { useState } from "react";

export default function Search() {
  const [queryData, setQueryData] = useState("");
  const [searchType, setSearchType] = useState("GUID"); // "GUID" or "Selector"
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    //Fill this in later.
  };

  return (
    <div className="w-4/5 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transform -translate-y-1/2">
      <div className="mb-4 max-w-xl">
        <div className="mb-2 flex items-center">
          <span>GUID</span>
          <label className="mx-2 switch">
            <input
              type="checkbox"
              onChange={() => {
                setSearchType((prev) =>
                  prev === "GUID" ? "Selector" : "GUID"
                );
                setQueryData("");
              }}
            />
            <span className="slider"></span>
          </label>
          <span>Selector</span>
        </div>
        {searchType === "GUID" && (
          <>
            <label
              htmlFor="guidInput"
              className="block text-gray-700 dark:text-gray-300 mb-2">
              GUID:
            </label>
            <input
              id="guidInput"
              type="text"
              value={queryData}
              onChange={(e) => setQueryData(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter GUID"
              disabled={searchType !== "GUID"}
            />
          </>
        )}
      </div>

      {searchType === "Selector" && (
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
              defaultValue="any"
              disabled={searchType !== "Selector"}>
              <option value="any">Any</option>
              {/* Additional options will be added here later */}
            </select>
            <input
              type="text"
              value={queryData}
              onChange={(e) => setQueryData(e.target.value)}
              className="w-2/3 p-2 border rounded"
              placeholder="Value"
              disabled={searchType !== "Selector"}
            />
          </div>
        </div>
      )}

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

      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 66px; // Made it longer
          height: 30px; // Made it thinner
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 10px; // Less rounded
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 24px;
          width: 24px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 10px; // Less rounded
        }

        input:checked + .slider:before {
          transform: translateX(36px); // Adjusted for the longer switch
        }

        /* Dark theme adjustments */
        .dark .slider {
          background-color: #4a4a4a;
        }
      `}</style>
    </div>
  );
}
