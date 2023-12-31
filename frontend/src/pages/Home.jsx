import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function Home() {

  return (
    <div>
      <NavBar />
      <SideBar selected="home">
        <section className="mt-24 ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
            This page is not finished yet            
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Please download Docker before using the application.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="tutorial"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn more
              </a>
              <a target="_blank" href="https://docs.docker.com/engine/install/ubuntu/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black hover:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-green-400">
                Download Docker
              </a>
            </div>
          </div>
        </section>
      </SideBar>
    </div>
  );
}

export default Home;
