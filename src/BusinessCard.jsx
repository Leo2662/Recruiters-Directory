import React from 'react';

    function BusinessCard({ business }) {
      return (
        <a href={business.fields['websiteurl']} target="_blank" rel="noopener noreferrer" className="w-full max-w-sm bg-[#020202] rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-[#020202] m-4 p-4">
          <div className="h-48 w-full flex items-center justify-center">
            <img className="rounded-t-lg h-full w-auto object-contain" src={business.fields['logo']} alt={`${business.fields['businessname']} logo`} />
          </div>
          <div className="px-5 pb-5">
            <p className="text-sm text-[#999999] font-inter">{business.fields['location']}</p> {/* Location above business name */}
            <h5 className="text-xl font-semibold tracking-tight text-[#f1f1f1] dark:text-[#f1f1f1] font-inter">{business.fields['businessname']}</h5>
            <p className="text-sm text-[#f1f1f1] mt-2 font-inter">
              {business.fields['numberOfEmployees']} Employees | 4.8/5 from Google Reviews {/* Display number of employees and reviews */}
            </p>
          </div>
        </a>
      );
    }

    export default BusinessCard;
