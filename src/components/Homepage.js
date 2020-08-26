import React from 'react';

const Homepage = (props) => {
    return (
      <React.Fragment>
        <div>welcome to the farmer's market</div>  
        <button onClick={props.locationsClick}>View Locations</button>
        <button onClick={props.monthsClick}>View Produce by Month</button>
      </React.Fragment>
    );
}
 
export default Homepage;