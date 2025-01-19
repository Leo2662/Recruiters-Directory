import React, { useState } from 'react';
    import { createRecord } from './airtableApi';

    function ProfileForm() {
      const [formData, setFormData] = useState({
        businessName: '',
        description: '',
        services: '',
        contactInfo: '',
        website: '',
        logo: null,
      });

      const [confirmationMessage, setConfirmationMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = {
          'businessname': formData.businessName,
          'description': formData.description,
          'services': formData.services,
          'contactinfo': formData.contactInfo,
          'websiteurl': formData.website,
        };
        try {
          const response = await createRecord(fields);
          console.log('Record created:', response);
          setConfirmationMessage('Profile successfully created and sent to Airtable!');
          setErrorMessage('');
          setFormData({
            businessName: '',
            description: '',
            services: '',
            contactInfo: '',
            website: '',
            logo: null,
          });
        } catch (error) {
          console.error('Error creating record:', error);
          setErrorMessage(`Failed to create profile: ${error.message}`);
          setConfirmationMessage('');
        }
      };

      return (
        <form onSubmit={handleSubmit} className="m-4">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="businessName" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Business Name</label>
              <input type="text" id="businessName" name="businessName" className="bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Business Name" required />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Description</label>
              <textarea id="description" name="description" className="bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Business Description" required />
            </div>
            <div>
              <label htmlFor="services" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Services Offered</label>
              <input type="text" id="services" name="services" className="bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Services" required />
            </div>
            <div>
              <label htmlFor="contactInfo" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Contact Info</label>
              <input type="text" id="contactInfo" name="contactInfo" className="bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Information" required />
            </div>
            <div>
              <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Website URL</label>
              <input type="url" id="website" name="website" className="bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://yourwebsite.com" required />
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-100 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      );
    }

    export default ProfileForm;
