import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className='col-lg-3'></div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us:</h3>
                                <p><a href="mailto:info@eazithenga.com">info@EaziThenga.com</a></p>
  
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us:</h3>
                                <p>Cell. + <a href="tel:0726802111">(27) 72 680 2111</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;