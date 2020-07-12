import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <div>
    <span><b>Show me:</b> </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Still</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Done</FilterLink>
  </div>
);

export default Footer;