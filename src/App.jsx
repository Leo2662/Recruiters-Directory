import React, { useEffect, useState } from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import ProfileForm from './ProfileForm';
    import ProfilePage from './ProfilePage';
    import { fetchRecords } from './airtableApi';
    import BusinessCard from './BusinessCard';
    import Header from './Header';
    import Footer from './Footer';

    function App() {
      const [businesses, setBusinesses] = useState([]);
      const [searchQuery, setSearchQuery] = useState('');
      const [filteredBusinesses, setFilteredBusinesses] = useState([]);
      const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility

      useEffect(() => {
        const getRecords = async () => {
          try {
            const data = await fetchRecords();
            setBusinesses(data);
            setFilteredBusinesses(data);
          } catch (error) {
            console.error('Error fetching records:', error);
          }
        };

        getRecords();
      }, []);

      const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = businesses.filter((business) => {
          const name = business.fields['businessname']?.toLowerCase() || '';
          const location = business.fields['location']?.toLowerCase() || '';
          const services = business.fields['services']?.toLowerCase() || '';
          return name.includes(query) || location.includes(query) || services.includes(query);
        });
        setFilteredBusinesses(filtered);
      };

      const handleAddItemClick = () => {
        setIsFormVisible(true); // Show the form when the button is clicked
      };

      return (
        <Router>
          <div>
            <Header searchQuery={searchQuery} handleSearch={handleSearch} />
            {isFormVisible && <ProfileForm />} {/* Render ProfileForm above the cards */}
            <div className="flex flex-wrap justify-center">
              {filteredBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
            <Routes>
              <Route path="/create-profile" element={<ProfileForm />} />
              <Route path="/profile/:businessName" element={<ProfilePage businesses={businesses} />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      );
    }

    export default App;
