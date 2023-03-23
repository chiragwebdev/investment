import React from 'react'
import { Link } from 'react-router-dom'
import Planning from './images/Planning.png'
import Business from './images/Business.png'
import Financial from './images/Financial.png'
import photo716411 from './images/photo-716411.jpeg'
import card1 from './images/card-1.jpeg'
import card2 from './images/card-2.jpg'
import card3 from './images/card-3.jpeg'
import card4 from './images/card-4.jpg'
import applogo1 from './images/applogo-1.png'
import applogo2 from './images/applogo-2.png'
import { ImLocation2 } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { IoIosCall } from 'react-icons/io'
import { RiTimeFill } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles// ..

function MainHome() {
    
    AOS.init({
        offset: 150,
        anchorPlacement: 'top-center',
    });
 
    return (
        <>
            <section className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 offset-lg-6 offset-md-5" data-aos="fade-left">
                            <h1 className='mb-4'  >SITA INVESTMENT COMPANY LIMITED</h1>
                            <h2 className='hero-title mb-4'>We Promise To Bring The Best Solution For Your Financial Needs.</h2>
                            <Link to="/#" className="btn btn-color-pink" >Our Services</Link>
                        </div>
                    </div>
                </div>
            </section>


            <section className="featured-services">
                <div className="container">

                    <div className="row ">

                        <div className="col-lg-4 service-item d-flex mb-3" data-aos="zoom-in">
                            <div className='boxbg card-hover'>
                                <img className='box-img-icon mb-4' src={Planning} alt="Planning" />
                                <div className='box-card-con'>
                                    <h4 className="title mb-4">Planning, Budgeting & Forecasting</h4>
                                    <p className="description mb-4">Align long-term plans, budgets and short-term forecasts with strategic objectives.</p>
                                    <Link to='/' className="btn btn-color-pink">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 service-item d-flex mb-3" data-aos="zoom-in" data-aos-delay="200">
                            <div className='boxbg card-hover'>
                                <img className='box-img-icon mb-4' src={Business} alt="Business" />
                                <div className='box-card-con'>
                                    <h4 className="title mb-4">Business Intelligence</h4>
                                    <p className="description mb-4">Unlock the power of information in your business and make data easier to use</p>
                                    <Link to='#' className="btn btn-color-pink">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 service-item d-flex mb-3" data-aos="zoom-in" data-aos-delay="300">
                            <div className='boxbg card-hover'>
                                <img className='box-img-icon mb-4' src={Financial} alt="Financial" />
                                <div className='box-card-con'>
                                    <h4 className="title mb-4">Financial Close & Consolidation</h4>
                                    <p className="description mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                    <Link to='#' className="btn btn-color-pink">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='company'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-1 order-md-0 " data-aos="fade-left">
                            <p className='company-name mb-4'>SITA INVESTMENT COMPANY LIMITED</p>
                            <h2 className='company-title mb-4'>Non Banking Finance Company (NBFC) Registered with RBI</h2>
                            <p className='comp-detaile description mb-3'>Reserve Bank of India neither accepts any responsibility nor guarantees the present position as to the financial soundness of the company or for the correctness of any of the statements or representations made or opinions expressed by the company and for discharge of any liability by the company.</p>
                            <p className='comp-detaile description mb-4'>Neither there is any provision in law to keep, nor does the company keep any part of the deposits with the Reserve Bank of India, neither accepts any responsibility nor guarantees the payment of deposits to any depositor or any person who has lent any sum to the company.</p>
                            <Link to='#' className="btn btn-color-pink">Know More</Link>
                        </div>
                        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
                            <img src={photo716411} alt="photo716411" className='comp-img' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='services'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <p className='mb-4 service-head'>Services</p>
                            <h2 className='mb-4 service-title' data-aos="fade-down">Call To Action</h2>
                            <p className='mb-4' data-aos="fade-down" data-aos-delay="100">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Link to='#' className="btn btn-color-pink">Call To Action</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='team'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className='mb-4 team-title'>TEAM</h2>
                            <p className='mb-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>
                    <div className="row team-card">
                        <div className="col-lg-3 col-sm-6 mb-3" data-aos="zoom-in">
                            <div className="card card-hover">
                                <img src={card1} className="card-img-top" alt="card1" />
                                <div className="card-body">
                                    <h5 className="card-title mb-2">Walter White</h5>
                                    <p className="card-text mb-4">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                    <Link to='#' className="btn btn-color-pink">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3" data-aos="zoom-in" data-aos-delay="100">
                            <div className="card card-hover">
                                <img src={card2} className="card-img-top" alt="card2" />
                                <div className="card-body">
                                    <h5 className="card-title mb-2">Sarah Jhonson</h5>
                                    <p className="card-text mb-4">Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                    <Link to='#' className="btn btn-color-pink">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3" data-aos="zoom-in" data-aos-delay="300">
                            <div className="card card-hover">
                                <img src={card3} className="card-img-top" alt="card3" />
                                <div className="card-body">
                                    <h5 className="card-title mb-2">William Anderson</h5>
                                    <p className="card-text mb-4">Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <Link to='#' className="btn btn-color-pink">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3" data-aos="zoom-in" data-aos-delay="500">
                            <div className="card card-hover">
                                <img src={card4} className="card-img-top" alt="card4" />
                                <div className="card-body">
                                    <h5 className="card-title mb-2">Amanda Jepson</h5>
                                    <p className="card-text mb-4">Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <Link to='#' className="btn btn-color-pink">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='app-section'>
                <div className="container">
                    <div className="row text-center">
                        <p className='mb-4 app-cont col-md-10 mx-auto'>SITA INVESTMENT COMPANY LIMITED AN RBI REGISTERED NBFC IS PARTNERED WITH THE FOLLOWING APPS FOR DIGITAL LENDING.</p>
                        <h2 className='app'>DIGITAL LENDING PARTNER</h2>
                        <p className='mb-5 app-company'>The Company Is Currently Lending ONLY On The Following</p>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-5 offset-md-1 mb-4 mb-md-0" data-aos="fade-left">
                            <div className="appbg card-hover">
                                <img src={applogo1} alt="app-logo-1" className='mb-4' />
                                <p className='mb-3 app-company'>Lending Service Provider : Begom i-make pvt ltd.</p>
                                <p className='mb-4 app-name' >Digital App Name : True Loan – Instant Loan guide</p>
                                <p className=' app-link-title'>Google PlayStore App Link :</p>
                                <Link className='app-link' to="https://play.google.com/store/apps/details?id=com.trueloan.instantloan" target="_blank">https://play.google.com/store/apps/details?id=com.trueloan.instantloan</Link>
                            </div>
                        </div>
                        <div className="col-md-5 " data-aos="fade-right">
                            <div className="appbg card-hover">
                                <img src={applogo2} alt="app-logo-2" className='mb-4' />
                                <p className='mb-3 app-company'>ending Service Provider : Mittech Media PVT LTD</p>
                                <p className='mb-4 app-name' >Digital App Name : Quick Loan Instant Adviser</p>
                                <p className=' app-link-title'>Google PlayStore App Link :</p>
                                <Link className='app-link' to="https://play.google.com/store/apps/details?id=com.quickloan.instantloanadvisorapp" target=" _blank">https://play.google.com/store/apps/details?id=com.quickloan.instantloanadvisorapp</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mb-4 mb-md-0 footer-col-1">
                            <h2 className='mb-3'>SITA INVESTMENT COMPANY LIMITED</h2>
                            <p>SITA INVESTMENT COMPANY LIMITED prides itself on a perfect understanding of the customer. Each products or service is tailor-made to perfectly suit customer needs. It is this guiding philosophy of putting people first that has brought the company closer to the grassroots, and made it the preferred choice for all the financing requirements among customers.</p>
                        </div>
                        <div className="col-md-3 mb-4 mb-md-0 footer-col-2">
                            <h2 className='mb-3'>Categories</h2>
                            <ul>
                                <li className='mb-3'><Link className='app-link menu-hover' to="#">Personal Loan</Link></li>
                                <li className='mb-3'><Link className='app-link menu-hover' to="#">Home Loan</Link></li>
                                <li className='mb-3'><Link className='app-link menu-hover' to="#">Aadhar Loan</Link></li>
                                <li className='mb-3'><Link className='app-link menu-hover' to="#">True Loan</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4  footer-col-3">
                            <h2 className='mb-3'>Quick Contact</h2>
                            <div className='d-flex mb-3'>
                                <div className='me-2'><ImLocation2 className='footer-icon' /></div>
                                <p>Dalmiapuram, Lalgudi, Tiruchirappalli, Tamil Nadu – 621651</p>
                            </div>
                            <div className='d-flex mb-3'>
                                <div className='me-2'><GrMail className='footer-icon' /></div>
                                <p>support@sitainvestmentcompanylimited.online</p>
                            </div>
                            <div className='d-flex mb-3'>
                                <div className='me-2'><IoIosCall className='footer-icon' /></div>
                                <p>+91 84565 84165</p>
                            </div>
                            <div className='d-flex mb-3'>
                                <div className='me-2'><RiTimeFill className='footer-icon' /></div>
                                <p>10 AM – 5 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col row-line">
                            <p className='me-3'>© Copyright 2012 – 2022| All Rights Reserved | SITA INVESTMENT COMPANY LIMITED, A RBI Registered NBFC</p>
                            <div className='d-flex mt-3 mt-md-0'>
                                <div className='social-icon icon-fb'>
                                    <Link to="about:blank#blocked" target="_blank"><BsFacebook /></Link>
                                </div>
                                <div className='social-icon icon-insta'>
                                    <Link to="about:blank#blocked" target="_blank"><AiFillInstagram /></Link>
                                </div>
                                <div className='social-icon icon-twit'>
                                    <Link to="about:blank#blocked" target="_blank"><AiOutlineTwitter /></Link>
                                </div>
                                <div className='social-icon icon-yt'>
                                    <Link to="about:blank#blocked" target="_blank"><AiFillYoutube /></Link>
                                </div>
                                <div className='social-icon icon-li'>
                                    <Link to="about:blank#blocked" target="_blank"><AiFillLinkedin /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainHome