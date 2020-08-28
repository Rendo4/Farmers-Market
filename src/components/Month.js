import React from "react";
import { seasonalProduceList } from "./trialSwitchCase"
import PropTypes from "prop-types";

function Month(props) {
    console.log(props)
  let monthlyProduceList = props.produceList;
  return (
    <React.Fragment>
      <h2>Produce for sale this Month</h2>
      <hr />
      {monthlyProduceList.map((mrWorldWide) => (
        <div>{mrWorldWide}</div>
      ))}
      <button onClick={props.whenHomeClicked}>Return to homepage</button>
      <button onClick={props.monthsClick}>Return to Months List</button>
    </React.Fragment >
    
    )
  }

export default Month;