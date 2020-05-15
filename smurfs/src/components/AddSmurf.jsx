import React from 'react';
import { connect } from 'react-redux';
import { pushData } from '../store/actions';
const AddSmurf = (props) => {
    console.log('AddSmurf props', props);
    return (
        <form>
            <label>Add Smurf Name: </label>
            <input type="text" />
        </form>
    );
};

export default connect(null, { pushData })(AddSmurf);
