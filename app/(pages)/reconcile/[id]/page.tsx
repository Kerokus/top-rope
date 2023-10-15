"use client";
import React, { useState } from "react";

export default function ConflictResolution() {
  const [isAnyCardSelected, setIsAnyCardSelected] = useState(false);
  const [selectedGuids, setSelectedGuids] = useState<string[]>([]);

  // Mock card data
  const clickedAttributeName = "AttributeX";
  const guids = [
    {
      id: "GUID1",
      attributes: ["Attribute1", "AttributeX", "Attribute3"],
    },
    {
      id: "GUID2",
      attributes: ["Attribute2", "Attribute4", "AttributeX"],
    },
  ];

  const handleSelect = (guidId: string) => {
    setSelectedGuids((prev) => {
      // Determine the new set of selected GUIDs
      const newSelectedGuids = prev.includes(guidId)
        ? prev.filter((id) => id !== guidId)
        : [...prev, guidId];

      // Check if at least two cards are selected
      setIsAnyCardSelected(newSelectedGuids.length > 1);

      return newSelectedGuids;
    });
  };

  const handleMerge = () => {
    // Placeholder for later.
    setSelectedGuids([]);
    setIsAnyCardSelected(false);
  };

  const handleDiscard = () => {
    // Placeholder for later.
    setSelectedGuids([]);
    setIsAnyCardSelected(false);
  };

  return (
    <div className="w-4/5 max-w-xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transform -translate-y-3/5">
      <h1 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        Resolve conflicts for attribute: {clickedAttributeName}
      </h1>

      <div className="guid-grid mb-4">
        {guids.map((guid) => (
          <div
            key={guid.id}
            className={`guid-card p-4 border rounded mb-4 ${
              selectedGuids.includes(guid.id)
                ? "bg-blue-200 dark:bg-blue-800"
                : "bg-gray-200 dark:bg-gray-700"
            }`}>
            <h2 className="text-lg font-medium mb-2">{guid.id}</h2>
            <ul>
              {guid.attributes.map((attr) => (
                <li
                  key={attr}
                  className={`mb-1 ${
                    attr === clickedAttributeName ? "text-red-500" : ""
                  }`}>
                  {attr}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleSelect(guid.id)}
              className="mt-2 bg-blue-500 text-white p-2 rounded">
              Select/Merge
            </button>
          </div>
        ))}
      </div>

      <div className="actions flex justify-end">
        <button
          onClick={handleMerge}
          className={`p-2 rounded mr-2 ${
            isAnyCardSelected
              ? "bg-green-500 text-white"
              : "bg-gray-400 text-white opacity-25 cursor-not-allowed"
          }`}
          disabled={!isAnyCardSelected}>
          Merge Selected
        </button>
        <button
          onClick={handleDiscard}
          className="bg-red-500 text-white p-2 rounded">
          Discard Changes
        </button>
      </div>
    </div>
  );
}
