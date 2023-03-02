import React, { useState } from "react";

export default function Title() {
  const data = [
    {
      index: 1,
      name: "ABC",
      work: "designer",
    },
    {
      index: 2,
      name: "XYZ",
      work: "haker",
    },
    {
      index: 3,
      name: "MNP",
      work: "dewloper",
    },
  ];
  return (
    <div>
      {data.map((user) => {
        return (
          <div className="data" key={user.index}>
            <h2>
              {user.index}: I am {user.name} And I am {user.work}.
            </h2>
          </div>
        );
      })}
    </div>
  );
}
