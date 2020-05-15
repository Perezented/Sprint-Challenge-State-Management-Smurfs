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
