import React from 'react';

    function SearchBar({ searchQuery, handleSearch }) {
      return (
        <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex justify-center">
          <div className="relative w-64"> {/* Set a fixed width for the search bar */}
            <input
              type="search"
              id="search"
              className="bg-[#0F0F0F] border border-[#2E2E2E] text-[#f1f1f1] text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              required
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#E8E8E8] rounded-full p-2">
              <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.5 10.5A6 6 0 1 1 10.5 4.5 6 6 0 0 1 16.5 10.5z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>
      );
    }

    export default SearchBar;
