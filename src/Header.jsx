import React from 'react';
    import SearchBar from './SearchBar';

    function Header({ searchQuery, handleSearch }) {
      return (
        <header className="bg-[#020202] text-[#f1f1f1] p-6 text-center font-inter">
          <h1 className="text-3xl font-extrabold tracking-wide">Find Your IT Recruiter</h1>
          <p className="text-lg mb-4">Connect with top professionals to elevate your career in the tech industry.</p>
          <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
        </header>
      );
    }

    export default Header;
