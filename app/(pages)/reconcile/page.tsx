"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ReconcilePage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("/api/reconcile");
        const result = await response.json();

        // Filter out duplicates based on the attribute_data key
        const seen = new Set();
        const uniqueData = result.filter((item) => {
          const isDuplicate = seen.has(item.attribute_data);
          seen.add(item.attribute_data);
          return !isDuplicate;
        });

        setData(uniqueData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        Selectors currently assigned to multiple GUIDs:
      </h2>
      <ul>
        {data.map((item, index) => (
          <Link href={`/reconcile/${item.id}`} key={index}>
            <li
              className={`p-4 my-2 cursor-pointer transition-colors duration-200 ease-in-out ${
                index % 2 === 0
                  ? "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800"
              }`}>
              <span>{item.attribute_data}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
