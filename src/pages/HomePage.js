import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByPrice, filterByType } from '../reducer/Reducer';
import { Card } from '../components/Card';
import Header from '../components/Header';

const HomePage = () => {
  // Get the list of items to display from the store
  const displayList = useSelector(state => state.DisplayList);

  // Get the dispatch function to trigger actions in the store
  const dispatch = useDispatch();

  // Trigger the filterByPrice action when the "1 lakh" button is clicked
  const handleFilterByPrice = () => {
    dispatch(filterByPrice());
  };

  // Trigger the filterByType action when the "type" button is clicked
  const handleFilterByType = () => {
    dispatch(filterByType());
  };

  // Render the component
  return (
    <>
      {/* Display the Header component */}
      <div>
        <Header />
      </div>

      {/* Button to filter by price */}
      <button onClick={handleFilterByPrice}>1 lakh</button>

      {/* Button to filter by type */}
      <button onClick={handleFilterByType}>type</button>

      {/* Display the list of items */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {displayList.map(item => (
          <div key={item.id}>
            <Card src={item.image} title={item.name} price={item.price} city={item.city} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
