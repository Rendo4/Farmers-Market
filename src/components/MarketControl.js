import React from 'react';
import LocationList from './LocationList';
import Homepage from "./Homepage";
import MonthlyProduce from './MonthlyProduce'
import { getProduce }  from "./fakeseasonalProduceService";
import { seasonalProduceList } from "./trialSwitchCase";

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //this is an array
      seasonalProduce: getProduce(),
      produceVisibleOnPage: false,
      locationsVisibleOnPage: false,
      selectedMonth: null
    }
  }
  //This is the "view produce by month" button handler
  handleClick = () => {
    if (this.state.selectedMonth != null) {
      this.setState({
        selectedMonth: null,
        produceVisibleOnPage: false,
        locationsVisibleOnPage: false
      });
    } else {
      this.setState(prevState => ({
        produceVisibleOnPage: !prevState.produceVisibleOnPage
      }))
    }
  }

  //This is the "View this week's locations" button handler
  handleLocationsClick = () => {
    this.setState({
      locationsVisibleOnPage: true
    })
    console.log("locations click")
  }

  handleMonthsClick = () => {
    //instead of a boolean and creating a new state slice (key value pair)
    //update the selectedMonth value to something else
    //recommend saving month as an integer
    this.setState({
      produceVisibleOnPage: true
    })
  }
  
  getMonth = (month) => {

    this.setState({selectedMonth: month});
    
    console.log(month)
  }

  render() {
    let currentlyVisibleState = null;
    // let buttonText = null;
    // console.log(this.state.produceVisibleOnPage)
    console.log(seasonalProduceList(this.state.selectedMonth));
    //User has selected a month
    if (this.state.selectedMonth != null) {
      currentlyVisibleState = <div>Hello</div>
      //change MonthyProduce to Months component
      // < Month list={seasonalProduceList(this.state.selectedMonth)}/>

    //  let something = seasonalProduceList(this.state.selectedMonth)
      //this new component - import the thing from trailSwitchCase.js
      // buttonText = "Return to Home";
    }else if(this.state.produceVisibleOnPage) {
      //this changes state
      currentlyVisibleState = <MonthlyProduce whenMonthClicked={this.getMonth}/>
    } else if(this.state.locationsVisibleOnPage) {
      //this changes state
      currentlyVisibleState = <LocationList />
    } else {
      //from homepage the user can select what month they want to see all the produce for
      //will set the selectedMonth from null to something else
      currentlyVisibleState = <Homepage monthsClick={this.handleMonthsClick} locationsClick={this.handleLocationsClick}  />
      // buttonText = "View this week's locations"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {/* <button onClick={this.handleClick}>{buttonText}</button> */}
      </React.Fragment>
    )
  }
}

export default MarketControl;

// import React from "react";
// import Ticket from "./Ticket";
// import PropTypes from "prop-types";

// function TicketList(props) {
//   return (
//     <React.Fragment>
//       <hr />
//       {props.ticketList.map((ticket) => (
//         <Ticket
//           whenTicketClicked={props.onTicketSelection}
//           names={ticket.names}
//           location={ticket.location}
//           issue={ticket.issue}
//           id={ticket.id}
//           key={ticket.id}
//         />
//       ))}
//     </React.Fragment>
//   );
// }

// TicketList.propTypes = {
//   ticketList: PropTypes.array,
//   onTicketSelection: PropTypes.func
// };

// export default TicketList;
