import React from "react";

const FleetFilters = ({
  filters,
  handleFilterChange,
  clearFilters,
  filterCars,
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-xl">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear Filters
        </button>
      </div>

      {/* Car Type */}
      <div className="mb-6">
        <h4 className="font-medium text-md mb-2">Car Type</h4>
        <div className="space-y-2">
          {["Small", "Medium", "SUV", "Bike"].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                name="type"
                value={type}
                checked={filters.type.includes(type)}
                onChange={handleFilterChange}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Passengers */}
      <div className="mb-6">
        <h4 className="font-medium text-md mb-2">Passengers</h4>
        <div className="space-y-2">
          {["2-5 passengers", "6+ passengers"].map((range) => (
            <label key={range} className="flex items-center">
              <input
                type="checkbox"
                name="passengers"
                value={range}
                checked={filters.passengers.includes(range)}
                onChange={handleFilterChange}
                className="mr-2"
              />
              {range}
            </label>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div className="mb-6">
        <h4 className="font-medium text-md mb-2">Transmission</h4>
        <div className="space-y-2">
          {["Automatic", "Manual"].map((trans) => (
            <label key={trans} className="flex items-center">
              <input
                type="radio"
                name="transmission"
                value={trans}
                checked={filters.transmission === trans}
                onChange={handleFilterChange}
                className="form-radio h-3 w-3 text-red-600"
              />
              <span className="ml-2 text-gray-700">{trans}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Doors */}
      <div className="mb-6">
        <h4 className="font-medium text-md mb-2">Doors</h4>
        <div className="space-y-2">
          {["2 Doors", "4 Doors"].map((door) => (
            <label key={door} className="flex items-center">
              <input
                type="checkbox"
                name="doors"
                value={door}
                checked={filters.doors.includes(door)}
                onChange={handleFilterChange}
                className="mr-2"
              />
              {door}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={filterCars}
        className="w-full md:w-1/3 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
      >
        Filters
      </button>
    </div>
  );
};

export default FleetFilters;
