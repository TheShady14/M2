"use client";

import React from "react";

const DataVisualization = () => {
  const chartData = [
    { values: [60, 15, 25], height: 300 },
    { values: [45, 20, 35], height: 200 },
    { values: [30, 40, 30], height: 120 },
    { values: [50, 25, 25], height: 180 },
  ];

  const colors = ["#8B5CF6", "#EC4899", "#F97316"];

  return (
    <div className="w-full p-8 bg-white/80 rounded-xl shadow-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - KPI Cards */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <div className="bg-white rounded-xl border-2 border-purple-300 p-6 shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  59%
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-pink-300 p-6 shadow-sm">
                <div className="text-4xl font-bold text-pink-500 mb-4">
                  R53m
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-orange-300 p-6 shadow-sm">
                <div className="text-4xl font-bold text-orange-500 mb-4">
                  825
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-blue-300 p-6 shadow-sm">
                <div className="text-4xl font-bold text-blue-500 mb-4">+73</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Chart */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Custom Data
                <br />
                Visualisation
              </h1>
            </div>

            <div className="flex items-end gap-8 h-80">
              {chartData.map((bar, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-end"
                  style={{ height: `${bar.height}px` }}
                >
                  <div className="w-16 flex flex-col rounded-t-lg overflow-hidden">
                    {bar.values.map((value, segmentIndex) => (
                      <div
                        key={segmentIndex}
                        className="w-full"
                        style={{
                          backgroundColor: colors[segmentIndex],
                          height: `${(value / 100) * bar.height}px`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
