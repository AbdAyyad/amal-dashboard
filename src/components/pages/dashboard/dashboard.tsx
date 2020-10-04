import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from "react-bootstrap";
import AdminNavBar from "../../components/navbar/admin-navbar";
import Header from "../../components/header/header";

const styles = makeStyles({
    nav: {
        minHeight: '100%',
        color: '#FFFFFF'
    }, height100: {
        minHeight: '100%',
        height: '100%',
        maxHeight: '100%'
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
        <Container fluid={true} className={classes.height100}>
            <Row className={classes.height100}>
                <Col md={3} className={classes.height100}>
                    <AdminNavBar/>
                </Col>
                <Col md={9}>
                    <Header type={'admin'} name={'em ali'}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;