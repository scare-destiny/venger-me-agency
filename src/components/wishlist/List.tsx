import React, { useState, useEffect } from 'react';
import { fetchWishilst } from 'data/wishlist';

export const List = () => {
  const [brData, setBrData] = useState({ loading: true, results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWishilst();
        console.log(data);
        setBrData({ loading: false, results: data.results });
        // } else {
        //   throw new Error('Invalid data structure');
        // }
      } catch (error) {
        console.error('Error fetching data:', error);
        setBrData({ loading: false, results: [] });
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="list-none ">
      {brData.loading && <div className="text-xl py-2">Loading...</div>}
      {brData.results.map((item: any) => (
        <li key={item.id} className="text-xl p-2 before:content-['🎁'] before:pr-2">
          <a href={item.URL} className="text-blue-700 underline">
            {item.Title}
          </a>
        </li>
      ))}
    </ul>
  );
};
