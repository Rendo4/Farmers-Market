import React from "react";
import PropTypes from "prop-types";

function MonthlyProduce(props){

    //make a Month component - style here what the "button" looks like for each month
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <React.Fragment>
      <h2>Choose a month</h2>
       {months.map(month => (
         <div onClick= {() => props.whenMonthClicked(month)}>{month}</div>
       ))}
      <hr />
       <button onClick={props.whenHomeClicked}>Return to homepage</button>
    </React.Fragment>
  );
}

export default MonthlyProduce;