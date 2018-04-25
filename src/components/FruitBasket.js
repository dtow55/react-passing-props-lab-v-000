import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({updateFilterCallback, selectedFilter, filters, fruit}) => 
  <div className="fruit-basket">
    <Filter handleChange={updateFilterCallback} filters={filters} />
    <FilteredFruitList filter={selectedFilter} fruit={fruit} />
  </div>

FruitBasket.defaultProps = {
  fruit: [], 
  filters: [], 
  currentFilter: null, 
  updateFilterCallback: null
};

export default FruitBasket;
