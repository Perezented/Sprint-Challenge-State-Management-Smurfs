import React from 'react';

import { connect } from 'react-redux';

import { fetchData } from '../store/actions';
import { useEffect } from 'react';
import AddSmurf from './AddSmurf';

const SmurfList = (props) => {
    console.log('SmurfList props', props);

    useEffect(() => {
        props.fetchData();
    }, []);

    return (
        <section>
            <div>Welcome to your state management version of Smurfs!</div>
            <br />
            <p> Add a smurf to the village:</p>
            <AddSmurf smurfList={props.smurfsList} />
            <h2>Smurf List</h2>
            {props.smurfsList &&
                props.smurfsList.map((value) => {
                    console.log(value);
                    return (
                        <div key={value.id}>
                            <h3>Hey there! My name is {value.name}!</h3>
                            <p>
                                My age is {value.age}, and I am {value.height}{' '}
                            </p>
                        </div>
                    );
                })}
        </section>
    );
};

const mapStateToProps = (state) => {
    console.log('SmurfList mSTP: ', state);
    return {
        isFetching: state.getSmurfDataReducer.isFetching,
        error: state.getSmurfDataReducer.error,
        smurfsList: state.getSmurfDataReducer.smurfsList,
    };
};
export default connect(mapStateToProps, { fetchData })(SmurfList);
