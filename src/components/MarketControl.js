import React from 'react';
import LocationList from './LocationList';
import Homepage from "./Homepage";
import MonthlyProduce from './MonthlyProduce'
import { getProduce }  from "./fakeseasonalProduceService";
import { seasonalProduceList } from "./trialSwitchCase";
import Month from "./Month";
import Header from "./Header";

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonalProduce: getProduce(),
      produceVisibleOnPage: false,
      locationsVisibleOnPage: false,
      selectedMonth: null
    }
  }
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

  handleLocationsClick = () => {
    this.setState({
      locationsVisibleOnPage: true
    })
  }

  handleMonthsClick = () => {
    //instead of a boolean and creating a new state slice (key value pair)
    //update the selectedMonth value to something else
    //recommend saving month as an integer
    this.setState({
      produceVisibleOnPage: true,
      selectedMonth: null
    })
  }
  
  getMonth = (month) => {

    this.setState({selectedMonth: month});
    
    console.log(month)
  }

  handleHomeClick = () => { 
    this.setState({ 
      selectedMonth: null,
      produceVisibleOnPage: false,
      locationsVisibleOnPage: false 
    });
  }
  render() {
    let currentlyVisibleState = null;
    //User has selected a month
    if (this.state.selectedMonth != null) {
      currentlyVisibleState = < Month produceList={seasonalProduceList(this.state.selectedMonth)} whenMonthClicked={this.getMonth} whenHomeClicked={this.handleHomeClick} monthsClick={this.handleMonthsClick} />
    }else if(this.state.produceVisibleOnPage) {
      currentlyVisibleState = <MonthlyProduce whenMonthClicked={this.getMonth} whenHomeClicked={this.handleHomeClick}/>
    } else if(this.state.locationsVisibleOnPage) {
      currentlyVisibleState = <LocationList whenHomeClicked={this.handleHomeClick}/>
    } else {
      //from homepage the user can select what month they want to see all the produce for
      //will set the selectedMonth from null to something else
      currentlyVisibleState = <Homepage monthsClick={this.handleMonthsClick} locationsClick={this.handleLocationsClick}  />

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
