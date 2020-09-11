import React from 'react'
import { Content } from './styles';

const Container = (props) => {
    return (
        <Content>
            {props.children}
        </Content>
    )
}

export default Container;
