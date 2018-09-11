import React, { Fragment } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { action } from '@storybook/react';

const Container = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: ${props => props.conType ? '20px 0 0 0' : '0px'};
  text-align: center;
`
const Header = styled.h2`
text-align: center;
`

const Row = styled.div`
  width:100%
  display: table;
  clear: both;
`

const Col = styled.div`
  float: left;
  width: 100%;
  display:${ props => props.colType ? "block" : "flex"};
  margin: auto;
`

const Input = styled.input.attrs({
    type: props => props.type ? props.type : 'text',
    placeholder: props => props.type == 'text' ? 'Enter User name' : 'Enter Password'
}) `
width: 95%;
padding: 12px;
border: none;
border-radius: 4px;
margin: 5px 15px;
opacity: 0.85;
display: inline-block;
font-size: 17px;
line-height: 20px;
text-decoration: none;
`;

const Btn = styled(Input).attrs({
    type: "button"
}) `
  outline: none !important;
  box-shadow: none;
  background-color: ${ props => props.login ? "#4CAF50" : "#666"};
  width:97%;
  &:hover {
    background-color:${ props => props.login ? "#45a049" : "#adadad"};
  }
`

const Forgot = styled.a.attrs({
    href: ''
}) `
pointer-events: none;
cursor: default;
`

const LogInput = ({ type, actions }) => {
    const action = type == 'text' ? actions.changeUserName : actions.changeUserPassword
    return (
        <Fragment>
            <Input type={type} onChange={e => action(e.target.value)} />
        </Fragment>
    )
}

const Fields = ({ conType, rowType, colType, onClick, actions }) => {
    return (
        <Container conType>
            <Row >
                <Col colType>
                    <LogInput type='text' actions={actions} />
                    <LogInput type='password' actions={actions} />
                    <Btn login value="login" onClick={() => { onClick.login(); actions.login() }}></Btn>
                </Col>
            </Row>
        </Container>
    )
}

const BtnContainer = ({ onClick }) => {
    return (
        <Container>
            <Row >
                <Col>
                    <Btn value="Sign up" onClick={onClick.signUp}></Btn>
                    <Btn value="Register" onClick={onClick.register}></Btn>
                </Col>
            </Row>
            <Row >
                <Col>
                    <Forgot onClick={onClick.forget}>Forgot password?</Forgot>
                </Col>
            </Row >
        </Container>
    )
}

const LogIn = ({ header, loading, onClick, actions, ...otherProps


}) => (

        <Fragment>
            <Header>{header}</Header>
            <Fields conType='input' colType='inputRow' onClick={onClick} actions={actions} />
            <BtnContainer onClick={onClick} />
        </Fragment>
    );

export default connect(
    state => ({
        userName: state.userName,
        loading: (
            _.get(state, 'profile.loading') ||
            _.get(state, 'customers.loading') ||
            _.get(state, 'orders.loading')
        )
    })
)(LogIn)