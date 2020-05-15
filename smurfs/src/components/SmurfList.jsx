import React from 'react';

import { connect } from 'react-redux';

import { fetchData } from '../store/actions';
import { useEffect } from 'react';

const SmurfList = (props) => {
    console.log('SmurfList props', props);

    useEffect(() => {
        props.fetchData();
    }, []);

    props.smurfsList.map((value) => {
        console.log(value);
        console.log(value.name);
    });

    return (
        <section>
            <h2>SmurfList</h2>
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
