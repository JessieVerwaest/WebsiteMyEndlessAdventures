"use client"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const searchBar: React.FC = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div>
      {showSearchBar ? (
        <div className='w-24'>
          <input type="text" placeholder="Search" />
          <button onClick={toggleSearch}>Close</button>
        </div>
      ) : (
        <FontAwesomeIcon onClick={toggleSearch} icon={faMagnifyingGlass} />
      )}
    </div>
  );
};

export default searchBar;
