import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Judic-O Couture.io</h2>
                    <p>Understang the basics of react, react-bootstrap & react-router-dom.</p>
                </Jumbotron>
                <Link>
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Grid>
        );
    };
};