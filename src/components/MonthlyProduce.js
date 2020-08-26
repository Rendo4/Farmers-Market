import React from "react";

function MonthlyProduce(props){
  //props
  //month = what month was selected - string
  //produce = array of objects 
    //need to filter through the array to find the right month
    //use a loop to display all produce in the array within the correct month



    //make a Month component - style here what the "button" looks like for each month


    //props being passed down here
    // 1) the getMonth 

    //make a loop that renders out 12 button click
    //needs to pass back up what month was clicked with the props.onGetMonth function
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <React.Fragment>
      <h2>Produce for sale this Month</h2>
       {months.map(month => (
         <div onClick= {() => props.whenMonthClicked(month)}>{month}</div>
       ))}
      <hr/>
    </React.Fragment>
  );
}

export default MonthlyProduce;