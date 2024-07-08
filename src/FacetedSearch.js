// src/FacetedSearch.js
import React from 'react';
import './FacetedSearch.css';

const FacetedSearch = () => {
  return (
    <div className="faceted-search">
      <div className="facet-section">
        <h3>Categories</h3>
        <button className="facet-button selected">Basketball</button>
        <button className="facet-button">Motorsport</button>
        <button className="facet-button">Football</button>
        <button className="facet-button">Volleyball</button>
      </div>
      <div className="facet-section">
        <h3>News</h3>
        <button className="facet-button selected">Trending</button>
        <button className="facet-button">Recent</button>
        <button className="facet-button">Articles</button>
      </div>
      <div className="facet-section">
        <h3>Analytics</h3>
        <button className="facet-button selected">Polls</button>
        <button className="facet-button">Voting</button>
        <button className="facet-button">Team Ranking</button>
      </div>
      <button className="search-button">Search</button>
    </div>
  );
}

export default FacetedSearch;
