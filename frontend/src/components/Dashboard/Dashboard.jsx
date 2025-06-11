import React from "react";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div>
      {/* for large screen  */}
      <div className="hidden lg:block">
        <div className="flex flex-col ">
          {/* Navbar at the top */}
          <Navbar />

          {/* Second Section */}
          <div className="border-2 rounded-2xl p-4 m-4 bg-white shadow">
            <p className="text-lg text-gray-700 font-medium">
              Optimize your experience on Gigfloww — track your job posts,
              manage teams, and streamline HR operations effortlessly today!
            </p>
          </div>

          {/* Future sections go here */}
          <div className="flex flex-row gap-10">
            <p className="text-2xl font-semibold mx-4">
              Welcome Back, Nuraj group
            </p>
            <div className="flex px-80 ml-90">
              <img src="\assets\date.png" alt="date" />
            </div>
          </div>

          <div className="flex flex-row p-4 gap-4 h-60">
            {/* card 1 */}
            <div>
              <img src="\assets\frame.png" alt="frame" />
            </div>

            {/* card 2 */}
            <div>
              <img src="\assets\Hiring.png" alt="hiring" />
            </div>
            {/* card 3 */}

            <div>
              <img src="\assets\projects.png" alt="projects" />
            </div>

            <div>
              <img src="\assets\Group.png" alt="group" />
            </div>
          </div>

          <div className="flex justify-items-start place-items-start">
            <img src="\assets\sales analytics.png" alt="salesAnalytics" />
          </div>

          <div>
            <img src="\assets\salesAnalytics2.png" alt="sales2" />
          </div>
        </div>
      </div>


{/* for small devices and md size devices  */}
      <div className="hidden max-lg:block">
        <div className="flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Banner Section */}
      <div className="border-2 rounded-2xl p-4 m-4 bg-white shadow">
        <p className="text-lg text-gray-700 font-medium">
          Optimize your experience on Gigfloww — track your job posts, manage
          teams, and streamline HR operations effortlessly today!
        </p>
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4">
        <p className="text-2xl font-semibold">Welcome Back, Nuraj group</p>
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <img
            src="/assets/date.png"
            alt="date"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <img src="/assets/frame.png" alt="frame" className="w-full h-auto" />
        <img src="/assets/Hiring.png" alt="hiring" className="w-full h-auto" />
        <img
          src="/assets/projects.png"
          alt="projects"
          className="w-full h-auto"
        />
        <img src="/assets/Group.png" alt="group" className="w-full h-auto" />
      </div>

      {/* Analytics Section */}
      <div className="p-4">
        <img
          src="/assets/sales analytics.png"
          alt="salesAnalytics"
          className="w-full h-auto mb-4"
        />
        <img
          src="/assets/salesAnalytics2.png"
          alt="sales2"
          className="w-full h-auto"
        />
      </div>
    </div>

      </div>
    </div>
  );
}

export default Dashboard;
