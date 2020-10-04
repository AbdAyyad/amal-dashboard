import {Component} from "react";
import {Col, Row, Form} from "react-bootstrap";
import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import classNames from "classnames";

interface HeaderProps {
    type: string;
    name: string;
    classes: {
        input: string;
        textColor: string;
        whiteBackground: string;
        borderNone: string;
        font: string;
    }
}

const styles = () => ({
    input: {
        height: '100%'
    }, textColor: {
        color: '#9EA5BD'
    }, whiteBackground: {
        backgroundColor: '#FFFFFF'
    }, borderNone: {
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
            border: 'none'
        }, '&:focus': {
            border: 'none',
            boxShadow: 'none'
        }
    }, font: {
        fontFamily: 'SFCompactDisplay'
    }
});

class Header extends Component<HeaderProps> {

    render() {
        const {classes} = this.props;
        return (
            <Row className={classNames(classes.whiteBackground, classes.font)}>
                <Col md={8} className={classes.input}>
                    <Form.Control className={classNames(classes.textColor, classes.borderNone)}
                                  placeholder='Type in to search'/>
                </Col>
                <Col md={3}>
                    <h3 className={classNames(classes.textColor)}>{this.props.type}</h3>
                </Col>
                <Col md={1}>
                    <p>{this.props.name}</p>
                </Col>
            </Row>
        );
    }
}

export default withStyles(styles, {withTheme: false})(Header);


