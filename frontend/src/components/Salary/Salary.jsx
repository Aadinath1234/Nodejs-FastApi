import React from "react";
import { Link } from "react-router-dom";

function Salary() {
  return (
    <div>
      {/* Large screen view */}
      <div className="hidden lg:block">
        <div className="px-4 py-6 space-y-8">
          {/* Navbar */}
          <div>
            <Link to="/">
              <img
                src="/assets/salaryNav.png"
                alt="navbar"
                className="w-full h-auto"
              />
            </Link>
          </div>

          {/* Activity and Date Section */}
          <div className="flex flex-row justify-between">
            <div className="p-4">
              <img src="/assets/Salary Activities.png" alt="salaryActivity" />
            </div>
            <div>
              <img src="/assets/salaryDate.png" alt="salaryDate" />
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-row justify-between p-4">
            <div className="flex flex-row gap-4">
              <img src="/assets/search.png" alt="search" />
              <img src="/assets/Filter.png" alt="filter" />
            </div>
            <div>
              <img src="/assets/SalaryMonthly.png" alt="monthlysalary" />
            </div>
          </div>

          {/* Data Section */}
          <div className="flex flex-row justify-center items-center gap-4">
            <img src="/assets/salaryData.png" alt="salarydata" />
            <img src="/assets/salaryDashboard.png" alt="DashboardSalary" />
          </div>
        </div>
      </div>

      {/* Small and Medium screen view */}
      <div className="block lg:hidden">
        <div className="px-4 py-6 space-y-6">
          {/* Navbar */}
          <div>
            <Link to="/">
              <img
                src="/assets/salaryNav.png"
                alt="navbar"
                className="w-full h-auto"
              />
            </Link>
          </div>

          {/* Activities and Date */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img
              src="/assets/Salary Activities.png"
              alt="salaryActivity"
              className="w-full md:w-1/2 h-auto"
            />
            <img
              src="/assets/salaryDate.png"
              alt="salaryDate"
              className="w-full md:w-1/3 h-auto"
            />
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/assets/search.png"
                alt="search"
                className="w-6 h-6 md:w-auto md:h-auto"
              />
              <img
                src="/assets/Filter.png"
                alt="filter"
                className="w-6 h-6 md:w-auto md:h-auto"
              />
            </div>
            <img
              src="/assets/SalaryMonthly.png"
              alt="monthlysalary"
              className="w-full md:w-auto h-auto"
            />
          </div>

          {/* Data Section */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <img
              src="/assets/salaryData.png"
              alt="salarydata"
              className="w-full lg:w-1/2 h-auto"
            />
            <img
              src="/assets/salaryDashboard.png"
              alt="DashboardSalary"
              className="w-full lg:w-1/2 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salary;
