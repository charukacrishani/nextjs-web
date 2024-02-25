import Head from 'next/head';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import React from 'react';

export default function Home() {

  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-800 min-h-screen">
  <section className="text-gray-100 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        {/* <img alt="content" className="object-cover object-center h-full w-full" src="/hero-desktop.png" /> */}
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-200 text-lg">Kaween Perera</h2>
            <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
            <p className="text-base">My most bizarre food combination that surprisingly works: Apples and cheese, Peanut butter and bacon, Chocolate and avocado</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Once, my meal plans resembled meticulously crafted blueprints, destined to crumble under the slightest real-world pressure. 
          Time was my nemesis, constantly stealing away minutes for prep and shopping. Unforeseen events, like impromptu gatherings or forgotten ingredients, sent everything into disarray. 
          Discouragement gnawed at me, questioning if healthy eating through planning was even possible.
          But instead of surrendering, I decided to adapt.</p>
          <a className="text-green-500 inline-flex items-center">View Meal Plan
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  
</section>
</div>
);
}

