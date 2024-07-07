import React from 'react';
import PropTypes from 'prop-types';
import GroupComponent5 from './GroupComponent5';
import GroupComponent4 from './GroupComponent4';
import ArrowSplitIcon from './ArrowSplitIcon';
import GroupIcon from './GroupIcon';
import GroupComponent2 from './GroupComponent2';
import './Cards.css';

const Cards = ({ items }) => {
  return (
    <div className="cards">
      {items.map((item, index) => (
        <div key={index} className="card-items">
          {index % 5 === 0 && <GroupComponent5 {...item} />}
          {index % 5 === 1 && <GroupComponent4 {...item} />}
          {index % 5 === 2 && <ArrowSplitIcon {...item} />}
          {index % 5 === 3 && <GroupIcon {...item} />}
          {index % 5 === 4 && <GroupComponent2 {...item} />}
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;
