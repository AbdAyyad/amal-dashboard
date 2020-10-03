import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from "react-bootstrap";
import AdminNavBar from "../navbar/admin-navbar";

const styles = makeStyles({
    nav: {
        minHeight: '100%',
        color: '#FFFFFF'
    }, paddingZero: {
        // padding: 0
    }, blueBackground: {
        backgroundImage: 'linear-gradient(180deg, #3A5673 0%, #51B9CD 100%)',
    }, amalLabel: {
        fontSize: '16pt',
        marginTop: '15%'
    }, activeStyle: {
        fontSize: '13pt',
        lineHeight: '24px'
    }
});

const Dashboard: React.FC = () => {
    const classes = styles();
    return (
        <Container fluid={true} className={classes.paddingZero}>
            <Row>
                <Col md={3}>
                    <AdminNavBar/>
                </Col>
                <Col md={9}>
                    <h1>content</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;