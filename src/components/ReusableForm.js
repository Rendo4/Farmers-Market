import React from "react"
import PropTypes from "prop-types"

function ReuseableForm(props) {
return (
<React.Fragment> 
    <form onSubmit={props.formSubmissionHandler}>
    <input
    type='text'
    name='name'
    placeholder='location' />

    
 </form>

    );
}
    </React.Fragment>




//that was my bad but we were talking about if they wanted to update the seasonal produce list ok 
//SAVE IT!! it'll be nice to be able to edit stuff

//