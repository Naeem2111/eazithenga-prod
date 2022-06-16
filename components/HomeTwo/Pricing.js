import React, { Component } from 'react';
import Link from 'next/link';

class Pricing extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="pricing-area pt-100 pb-70" id="price">
                <div className="container">
                    <div className="section-title">
                        <span>What We Offer</span>
                        <h2>Our Pricing Plan For You</h2>
                        <p>We have tailored packages to suit your business needs</p>
                    </div>

                    <div className="tab quote-list-tab">
                        {/* Tabs */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>Monthly</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span>Yearly</span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row">
                                <div className="col-lg-2 col-md-2"></div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Basic</h3>
                                                <p>A taste of what you can accomplish</p>
                                            </div>
                                            <span>Free<sub></sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Store Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Linked with Whatsapp Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Linked with Facebook Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    up to 10 products
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Payment Gateway
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Chat Automation
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Order Management
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                    <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Standard</h3>
                                                <p>A taste of what you can accomplish</p>
                                            </div>
                                            <span>R200<sub>/m</sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Store Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Linked with Whatsapp Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Linked with Facebook Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Unlimited Products
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Payment Gateway
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Chat Automation
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Order Management
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
 
                            <div id="tab2" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-2 "></div>
                                    <div className="col-lg-4 col-md-6">
                                    <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Basic</h3>
                                                <p>A taste of what you can accomplish</p>
                                            </div>
                                            <span>Free<sub></sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Store Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Linked with Whatsapp Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Linked with Facebook Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    up to 10 products
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Payment Gateway
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Chat Automation
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Order Management
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                        <div className="pricing-top-heading">
                                                <h3>Standard</h3>
                                                <p>A taste of what you can accomplish</p>
                                            </div>
                                            <span>R2000<sub>/y</sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Store Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Linked with Whatsapp Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Linked with Facebook Catalog
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Unlimited Products
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Payment Gateway
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Chat Automation
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Order Management
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pricing;