import React, { Component } from 'react'
import Container from '../containers/Container'

const TestComponent = (props) => {
    console.log({props})
    return <Container renderState={(state) => {} } />;
} 
 
export default TestComponent;