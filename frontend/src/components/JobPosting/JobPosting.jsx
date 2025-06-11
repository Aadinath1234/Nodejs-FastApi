import React from "react";
import { Link } from "react-router-dom";

function JobPosting() {
  return (
    <div>
      {/* for large screen devices  */}
      <div>
        <div className="hidden lg:block">
          {/* Navbar */}
          <div className="w-full">
            <Link to="/">
              <img
                src="/assets/navbarHiring.png"
                alt="navbar"
                className="w-full"
              />
            </Link>
          </div>

          {/* Job posting */}
          <div className="p-4">
            <img src="/assets/jobposting.png" alt="jobposting" />
          </div>

          {/* Other data */}
          <div className="p-4">
            <img src="/assets/Fill in Job Details.png" alt="fill in details" />
          </div>

          <div className="flex flex-row justify-center items-center p-4 gap-4">
            <div className="mt-16 mr-10">
              <img src="/assets/jobForm.png" alt="jobForm" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="mt-2">
                <img src="/assets/managePosting.png" alt="managePosting" />
              </div>
              <div className="mb-96 mt-4">
                <img src="/assets/writeWithAi.png" alt="writingwithai" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // for small width devices  and md size devices  */}
      <div className="hidden max-lg:block">
        <div className="px-4 py-6 space-y-6">
          {/* Navbar */}
          <div className="w-full">
            <Link to="/">
              <img
                src="/assets/navbarHiring.png"
                alt="navbar"
                className="w-full h-auto"
              />
            </Link>
          </div>

          {/* Job Posting Section */}
          <div className="w-full max-w-6xl mx-auto">
            <img
              src="/assets/jobposting.png"
              alt="jobposting"
              className="w-full h-auto"
            />
          </div>

          {/* Fill in Job Details */}
          <div className="w-full max-w-6xl mx-auto">
            <img
              src="/assets/Fill in Job Details.png"
              alt="fill in details"
              className="w-full h-auto"
            />
          </div>

          {/* Job Form Section */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-4">
            {/* Job Form Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/assets/jobForm.png"
                alt="jobForm"
                className="w-full h-auto"
              />
            </div>

            {/* Side Options: Manage Posting & Write with AI */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div>
                <img
                  src="/assets/managePosting.png"
                  alt="managePosting"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <img
                  src="/assets/writeWithAi.png"
                  alt="writingwithai"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPosting;
