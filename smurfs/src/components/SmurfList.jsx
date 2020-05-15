import React from 'react';

import { connect } from 'react-redux';

import { fetchData } from '../store/actions';
import { useEffect } from 'react';

const SmurfList = (props) => {
    console.log('SmurfList props', props);

    useEffect(() => {
        props.fetchData();
    }, []);

    return <h1>test</h1>;
};

const mapStateToProps = (state) => {
    console.log('SmurfList mSTP: ', state);
    return {};
};
export default connect(mapStateToProps, { fetchData })(SmurfList);
