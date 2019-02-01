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
                    <p>Using react, react-bootstrap & react-router-dom to build a Fashion Home.</p>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="asset/belisco.jpg" circle className="profile-pic" />
                    <h3>Mrs Gift Onyinye</h3>
                    <p>In her words Judic-O Couture brands need to integrate social commitments into their strategies and focus on attracting community members and building a winning business require the focus to resist doing too many things at once, while finding the right blend of fashion and technology. That is we focus only on female wears.</p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="asset/ugonma.jpg" circle className="profile-pic" />
                    <h3>Jessy Chigo</h3>
                    <p>In her words Judic-O Couture brands need to integrate social commitments into their strategies and focus on attracting community members and building a winning business require the focus to resist doing too many things at once, while finding the right blend of fashion and technology. That is we focus only on female wears.</p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="asset/emmanuel.jpg" circle className="profile-pic" />
                    <h3>Emmanuel Ike</h3>
                    <p>In her words Judic-O Couture brands need to integrate social commitments into their strategies and focus on attracting community members and building a winning business require the focus to resist doing too many things at once, while finding the right blend of fashion and technology. That is we focus only on female wears.</p>
                    </Col>
                </Row>
            </Grid>
        );
    };
};