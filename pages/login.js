import React, { Fragment } from 'react'
import styled from 'styled-components';

const Input = styled.input.attrs({
    type: props => props.type ? props.type : 'test',
    placeholder: props => props.type == 'text' ? 'Enter User name' : 'Enter Password'
})`
  
`;

const Lable = styled.label`

`



const Container = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px 0 30px 0;
`

const LogInput = ({ lable, type }) => {
    return (
        <Fragment>
            <Lable>{lable}</Lable>
            <Input type={type} />
        </Fragment>
    )
}

const LogIn = ({ header, user, loading, onClick, ...otherProps }) => (

    <Fragment>
        <Container>
            <LogInput lable='name' type='text' />
            <LogInput lable='password' type='password' />
        </Container>
    </Fragment>
);

export default LogIn;
