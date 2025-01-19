import React from 'react';
    import { useParams } from 'react-router-dom';
    import BusinessCard from './BusinessCard';

    function ProfilePage({ businesses }) {
      const { businessName } = useParams();
      const business = businesses.find(
        (b) => b.fields['businessname'] === decodeURIComponent(businessName)
      );

      if (!business) {
        return <p>Business not found.</p>;
      }

      return (
        <div className="flex flex-wrap justify-center">
          <BusinessCard business={business} />
        </div>
      );
    }

    export default ProfilePage;
