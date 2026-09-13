import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div id="search-section" className="search-bar-card">
      <div className="search-input-group icon-search">
        <input type="text" placeholder="Search hackathons..." />
      </div>
      
      <div className="search-select-group">
        <select defaultValue="">
          <option value="" disabled>All Categories</option>
          <option value="web3">Web3 / Blockchain</option>
          <option value="ai">Artificial Intelligence</option>
          <option value="fintech">Fintech</option>
        </select>
      </div>

      <div className="search-select-group icon-date">
        <select defaultValue="">
          <option value="" disabled>Any Date</option>
          <option value="upcoming">Upcoming Month</option>
          <option value="ongoing">Currently Running</option>
        </select>
      </div>

      <button className="btn-search">Search</button>
    </div>
  );
};

export default SearchBar;