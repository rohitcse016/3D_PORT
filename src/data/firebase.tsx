import { useState, useEffect } from "react";


// Custom Hook for fetching portfolio data
export const usePortfolioData = () => {
  // State to store portfolio data
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from Firebase or any other API
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        // Replace this URL with your actual Firebase URL or API endpoint
        const response = await fetch('https://adityaportfolio-b88d6-default-rtdb.firebaseio.com/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const fetchedData = await response.json();
        console.log("fetchedData",fetchedData)
        setData(fetchedData); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchPortfolioData();
  }, []); 
  return data;
};
