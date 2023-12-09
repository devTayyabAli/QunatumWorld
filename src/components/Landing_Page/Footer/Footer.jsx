import React from 'react'
import './footer copy.css'
import linkicon from './images/footer-link-icon.png'
import marilicon from './images/mail.png'
import logo from "../../../../src/assets/images/logo.jpg"
import fb from './images/fb.png'
import tel from './images/tel.png'
import dcd from './images/dcd.png'
import tw from './images/tw.png'

function Footer() {
  return (
    <>
       <footer>
        <div className="footer-container">
            <div className="footer-container-flex">
                
                <div className="footer-content">
                    {/* <div className="footer-box">
                        <strong>QUICK LINKS</strong>
                        <ul>
                            <li><img src={linkicon} alt="link-image" /><a href="#">White Paper</a></li>
                            <li><img src={linkicon} alt="link-image"/><a href="#">User Support</a></li>
                            <li><img src={linkicon} alt="link-image" /><a href="#">Report A Bug</a></li>
                            <li><img src={linkicon} alt="link-image" /><a href="#">Explore</a></li>
                        </ul>
                    </div> */}
                    <div className="footer-box">
                        <strong>CONTACT US</strong>
                        <ul>
                            <li><img src={marilicon} alt="mail-image" /><a href="#">info@fexrace.network </a></li>
                        </ul>
                    </div>

                    {/* <div className="footer-box">
                        <strong>ADDRESS</strong>
                        <ul>
                            <li><a className='Address_ip'>Dynamic Innovations S.R.L ,Costa Rica</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>

            <section className="subcribe-container">
                <h3>SUBSCRIBE</h3>
                <div className="subcribe-input">
                    <input placeholder="Example@gmail.com" type="email" />
                    <a className="subcribe-btn" href="#">Send</a>
                </div>
            </section>

            <div className="footer-bottom">
                <div className="copyright">
                    <span className='copyright-p'>Copyright &#169;http://quantumworld.club all rights reserved.</span>
                </div>
            </div>
        </div>
    </footer>
  
    </>
  )
}

export default Footer