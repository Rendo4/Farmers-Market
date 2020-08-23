import React from 'react';
import LocationList from './LocationList';
import Homepage from "./Homepage";
import MonthlyProduce from './MonthlyProduce'
import { getProduce }  from "./fakeseasonalProduceService";

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
    //instead of a boolean and creating a new slate slice (key value pair)
    //update the selectedMonth value to something else
    //recommend saving month as an integer
    this.setState({
      produceVisibleOnPage: true
    })
  }

  // handleChangingSelectedMonth = (month) => {
  //   const selectedMonth = this.state.seasonalProduceList.filter((produce) => produce.month === month)[0];
  //   this.setState({selectedMonth: selectedMonth});
  // }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    console.log(this.state.produceVisibleOnPage)

    //User has selected a month
    if (this.state.selectedMonth != null) {
      currentlyVisibleState = <MonthlyProduce month = {this.state.selectedMonth} produce ={this.state.seasonalProduce} />
      buttonText = "Return to Home";
    } else if(this.state.locationsVisibleOnPage) {
      //this changes state
      currentlyVisibleState = <LocationList />
    } else {
      //from homepage the user can select what month they want to see all the produce for
      //will set the selectedMonth from null to something else
      currentlyVisibleState = <Homepage monthsClick={this.handleMonthsClick}  />
      buttonText = "View this week's locations"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default MarketControl;