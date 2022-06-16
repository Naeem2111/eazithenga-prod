import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pb-100" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/about-img.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>A Home for Every Trader</h2>
                                <p>We are building a platform to enable social e-commerce with all the tools to thrive. </p>
                               
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Store Catalog
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Chat Automation
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Accepting Payments
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Enabling Escrow
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Delivery
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Optimized Marketting
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Link href="#features">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;