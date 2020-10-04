import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from "react-bootstrap";
import AdminNavBar from "../../components/navbar/admin-navbar";
import Header from "../../components/header/header";
import classNames from "classnames";

const styles = makeStyles({
    height100: {
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
    }, font: {
        fontFamily: 'SFCompactDisplay'
    }, colorWhite: {
        color: '#FFFFFF'
    }, bottomBorder: {
        borderBottom: '1px solid rgba(255,255,255,0.5)'
    }, font19: {
        fontSize: '19'
    }, width100: {
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%'
    }, height20: {
        minHeight: '20%',
        height: '20%',
        maxHeight: '20%'
    }, paddingLeft10: {
        paddingLeft: '10%'
    }, font24: {
        fontSize: '24pt'
    }, marginLeft3: {
        marginLeft: '3%'
    }, marginTop25: {
        marginTop: '25%'
    }, marginTop10: {
        marginTop: '10%'
    }, select: {
        color: '#5361FF',
        fontSize: '10pt',
        backgroundColor: 'E5E7FF',
        borderRadius: '4px',
        marginLeft: '95%'
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
                    <Row>
                        <Col md={12}>
                            <Header type={'admin'} image={'https://picsum.photos/200/300'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} className={classes.marginLeft3}>
                            <h2 className={classNames(classes.font, classes.marginTop25)}>Donation data</h2>
                        </Col>
                        <Col md={5}/>
                        <Col md={3}>
                            <select className={classNames(classes.marginTop25, classes.select)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className={classes.height20}>
                        <Col md={3} className={classes.marginLeft3}>
                            <table
                                className={classNames(
                                    classes.blueBackground,
                                    classes.font,
                                    classes.colorWhite,
                                    classes.width100,
                                    classes.height100,
                                    classes.marginTop10)
                                }>
                                <tbody>
                                <tr className={classes.bottomBorder}>
                                    <td className={classNames(classes.font19, classes.paddingLeft10, classes.colorWhite, classes.font)}>
                                        total donations
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classNames(classes.font24, classes.paddingLeft10)}>3522825</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;