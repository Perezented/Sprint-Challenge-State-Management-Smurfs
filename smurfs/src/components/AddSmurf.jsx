import React from 'react';
import { connect } from 'react-redux';
import { pushData } from '../store/actions';
import { useState } from 'react';
import { useEffect } from 'react';
const AddSmurf = (props) => {
    console.log('AddSmurf props', props);

    const [smurf, setSmurf] = useState();

    useEffect(() => {
        props.pushData();
    }, props);

    const handleChanges = (e) => {
        e.preventDefault();
        const newerSmurf = {
            ...smurf,
            [e.target.name]: e.target.value,
        };
        return setSmurf(newerSmurf);
    };
    const onSubmit = (e) => {
        props.pushData(smurf);
        console.log('heres the smurf sent ', smurf);
        e.preventDefault();
    };
    return (
        <form
            onSubmit={(e) => {
                onSubmit();
            }}
        >
            <label htmlFor="name">Add Smurf Name: </label>
            <input
                type="text"
                name="name"
                placeholder="New Smurf Here"
                onChange={handleChanges}
                value={props.name}
            />
            <label htmlFor="age"> Smurf Age:</label>
            <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChanges}
            />
            <label htmlFor="height"> Height: </label>
            <input
                type="number"
                name="height"
                placeholder="Height"
                onChange={handleChanges}
            />
            <label htmlFor="id">
                <input type="hidden" id="id" name="id" value={Date.now()} />
            </label>
            <button>Submit Smurf</button>
        </form>
    );
};

export default connect(null, { pushData })(AddSmurf);
