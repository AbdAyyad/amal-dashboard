import {Component} from "react";
import {Col, Row, Form} from "react-bootstrap";
import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import classNames from "classnames";

interface HeaderProps {
    type: string;
    image: string;
    classes: {
        textColor: string;
        whiteBackground: string;
        borderNone: string;
        font: string;
        border: string;
        fontSize16: string;
        userType: string;
        img: string;
        height100: string;
    }
}

const styles = () => ({
    height100: {
        minHeight: '100%'
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
    }, border: {
        borderLeft: '1px solid #DDE1EE',
        borderRight: '1px solid #DDE1EE'
    }, fontSize16: {
        fontSize: '16pt'
    }, userType: {
        paddingTop: '6%',
        paddingLeft: '6%',
        marginTop: '4%'
    }, img: {
        height: '80%',
        width: '80%',
        paddingTop: '15%',
        paddingLeft: '20%'
    }
});

class Header extends Component<HeaderProps> {

    render() {
        const {classes} = this.props;
        return (
            <Row className={classNames(classes.whiteBackground, classes.font, classes.height100)}>
                <Col md={8} className={classNames(classes.height100)}>
                    <Form.Control className={classNames(classes.textColor, classes.borderNone,classes.height100)}
                                  placeholder='Type in to search'/>
                </Col>
                <Col md={3} className={classes.border}>
                    <h3 className={classNames(classes.textColor, classes.fontSize16, classes.userType)}>{this.props.type}</h3>
                </Col>
                <Col md={1}>
                    <img src={this.props.image} alt={'admin icon'} className={classes.img}/>
                </Col>
            </Row>
        );
    }
}

export default withStyles(styles, {withTheme: false})(Header);


