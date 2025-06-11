import React from "react";
import { Link } from "react-router-dom";

function People() {
  return (
    <div className="px-4 py-6 space-y-6">
      {/* Navbar */}
      <div className="w-full">
        <Link to="/">
          <img
            src="/assets/NavPeople.png"
            alt="navbar"
            className="w-full h-auto"
          />
        </Link>
      </div>

      {/* List of People */}
      <div className="flex justify-center items-center">
        <img
          src="/assets/add List.png"
          alt="List of people"
          className="w-full max-w-4xl h-auto"
        />
      </div>

      {/* Search and Filters */}
      <div className="flex justify-between flex-wrap gap-4 items-center px-2 md:px-8">
        <div className="flex flex-wrap gap-4 items-center">
          <img
            src="/assets/search.png"
            alt="search"
            className="w-6 h-6 md:w-auto md:h-auto"
          />
          <img
            src="/assets/Type.png"
            alt="type"
            className="w-6 h-6 md:w-auto md:h-auto"
          />
          <img
            src="/assets/Role.png"
            alt="role"
            className="w-6 h-6 md:w-auto md:h-auto"
          />
          <img
            src="/assets/AdvancedFilter.png"
            alt="filter"
            className="w-6 h-6 md:w-auto md:h-auto"
          />
        </div>
        <div>
          <img
            src="/assets/export.png"
            alt="export"
            className="w-6 h-6 md:w-auto md:h-auto"
          />
        </div>
      </div>

      {/* Data Table */}
      <div className="flex justify-center items-center">
        <img
          src="/assets/ListData.png"
          alt="listdata"
          className="w-full max-w-6xl h-auto"
        />
      </div>
    </div>
  );
}

export default People;
