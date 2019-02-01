import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="asset/omotola.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                    <Image src="asset/belisco.jpg" className="about-profile-pic" rounded />
                    <h3>Mrs Gift Onyinye</h3>
                    <p>Judic-O Fashion Homes is a line of modern beautifully made stylish clothes that have a national look with a unique Nigerian influence, the collection is designed by the couturier twice a year, summer and winter ranges.</p>

                    <p>The Judic-O Fashion Homes look can be described as dramatique, and geometric with an edge using exquisite fabrics and a modern fusion of African influences which sets her apart.</p>

                    <p></p>
                    </Col>
                </Grid>
            </div>
        );
    };
};