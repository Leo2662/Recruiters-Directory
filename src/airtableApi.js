const AIRTABLE_API_URL = 'https://api.airtable.com/v0';
    const AIRTABLE_BASE_ID = 'appbLAIjEcoXRSkoh';
    const AIRTABLE_TABLE_ID = 'tblRY4LAbvucyK8aT';
    const AIRTABLE_API_KEY = 'patAZsMq0dIe1UIb1.8ca684d439f8e8453e44b7d8b1d99c40d7156c2156523a20e73200ba802b3724';

    const headers = {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    };

    export async function fetchRecords() {
      try {
        const response = await fetch(`${AIRTABLE_API_URL}/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
          headers,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.records;
      } catch (error) {
        console.error('Error fetching records:', error);
        throw error;
      }
    }

    export async function createRecord(fields) {
      try {
        const response = await fetch(`${AIRTABLE_API_URL}/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ fields }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error response from Airtable:', errorData);
          throw new Error(`HTTP error! status: ${response.status} - ${errorData.error.message}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error creating record:', error);
        throw error;
      }
    }
