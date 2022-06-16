import React, { Component } from 'react';
import Link from 'next/link';

class Features extends Component {
    render() {
        return (
            <div className="features-area mt-minus-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>Catalog</h3>
                                <p>List your products on a digital storefront to maximize convenience for your customers. Keep your prices updated!</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-engineer"></i>
                                <h3>Share Cart</h3>
                                <p>Allow customers to place order through the store and continue the transaction over your preffered Social Media Channel.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Product Pages</h3>
                                <p>All the details of an item listed so your customer has all the information they need to make the purchase. Sell More!</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;