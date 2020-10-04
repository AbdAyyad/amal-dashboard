import {NavLink} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";

const styles = makeStyles({
    nav: {
        color: '#FFFFFF'
    }, blueBackground: {
        backgroundImage: 'linear-gradient(180deg, #3A5673 0%, #51B9CD 100%)',
    }, amalLabel: {
        fontSize: '16pt',
        marginTop: '27%',
        paddingBottom: '9%'
    }, activeStyle: {
        fontSize: '13pt',
        lineHeight: '24px',
        fontWeight: 'bold'
    }, linkStyle: {
        textDecoration: 'none',
        color: '#FFFFFF',
        '&:hover': {
            color: '#FFFFFF',
            textDecoration: 'none'
        }
    }, ul: {
        listStyleType: 'none'
    }, li: {
        marginTop: '9%'
    }, logOff: {
        marginTop: '85.5%',
    }, height100: {
        minHeight: '100%',
        height: '100%',
        maxHeight: '100%'
    }
});


const AdminNavBar = () => {
    const classes = styles();

    return (
        <Row className={classNames(classes.blueBackground, classes.height100)}>
            <Col md={1}/>
            <Col md={10}>
                <nav className={classes.nav}>
                    <h3 className={classes.amalLabel}>AMAL</h3>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <NavLink className={classes.linkStyle} to={'/dashboard'}
                                     activeClassName={classes.activeStyle}
                                     exact={true}>Dashboard</NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink className={classes.linkStyle} to={'/1'} activeClassName={classes.activeStyle}
                                     exact={true}>Content
                                Control</NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink className={classes.linkStyle} to={'/2'} activeClassName={classes.activeStyle}
                                     exact={true}>History</NavLink></li>
                        <li className={classes.li}>
                            <NavLink className={classes.linkStyle} to={'/3'} activeClassName={classes.activeStyle}
                                     exact={true}>Most in Need</NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink className={classes.linkStyle} to={'/4'} activeClassName={classes.activeStyle}
                                     exact={true}>Partners</NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink className={classes.linkStyle} to={'/5'} activeClassName={classes.activeStyle}
                                     exact={true}>Loyalty
                                Points</NavLink></li>
                        <li className={classes.li}>
                            <NavLink className={classes.linkStyle} to={'/6'} activeClassName={classes.activeStyle}
                                     exact={true}>Fundraising</NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink className={classes.linkStyle} to={'/7'} activeClassName={classes.activeStyle}
                                     exact={true}>News &
                                Events</NavLink>
                        </li>
                        <li className={classNames(classes.li, classes.logOff)}>
                            <NavLink className={classes.linkStyle} to={'/7'} exact={true}>
                                Log off
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Col>
            <Col md={1}/>
        </Row>
    );
}

export default AdminNavBar;