import React from 'react';

const Homepage = (props) => {
    return (
      <React.Fragment>
        <div>welcome to the farmer's market</div>  
        {/* <button onClick={this.handleLocationsClick}>View Locations</button> */}
        <button onClick={props.handleMonthsClick}>View Produce by Month</button>
      </React.Fragment>
    );
}
 
export default Homepage;