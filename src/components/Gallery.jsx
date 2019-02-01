import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Image src="asset/school-boy.jpg" className="header-image" />
                <Grid>
                    <h2>Gallery Photoshot</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                        <p>Of a truth, we specialize only on female wears such as Buba, Caftan, Bubu, Asoebi, Madam Blouse, Traditional outfit, school uniforms of all kinds, apron, gowns, cover-all etc.</p>
                        <p>We also specialize on Head Gear / Tie, Washing of Head Tie, Hat - Making etc.</p>
                        </Col>

                        <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="asset/school-children.jpeg" />
                        <p>Image of School Uniforms done by Judic-O Fashion Homes</p>
                        </Col>

                        <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="asset/nigerian-aso-ebi.jpg" />
                        <p>Image of Asoebi Outfit done by Judic-O Fashion Homes</p>
                        </Col>

                        <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="asset/tools1.jpeg" />
                        <p>Image of Tools used Hat making owned by Judic-O Fashion Homes</p>
                        </Col>

                        <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="asset/tools2.jpeg" />
                        <p>Image of Tools used Head Tie making owned by Judic-O Fashion Homes</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    };
};