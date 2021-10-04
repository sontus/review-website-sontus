import React from 'react';
import { Form, Button, Row, Container } from 'react-bootstrap';
import main from '../../assets/main.png'
import './Home.css';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <Row>
            <section className="sptb-2 sptb-tab">
				<div className="header-text mb-0">
					<div className="container">
						<div className="row">
							<div className="col-xl-7 col-lg-7 col-md-12">
								<div className="text-body mb-7">
									<h1 className="mb-1 leading-tight ">The World's Largest Selection of Courses</h1>
									<p>It is a long established fact that a reader will be distracted by the readable.</p>
								</div>
								<div className="search-background bg-transparent">
									<div className="form row g-0 ">
										<div className="form-group  col-xl-9 col-lg-9 col-md-12 mb-0">
                                            <Form.Control type="text" className="form-control input-xl ps-5 border-white-1" placeholder="Search Courses...." />
										</div>
										<div className="col-xl-3 col-lg-3 col-md-12 mb-0">
                                            <Button variant="primary" type="submit" className="btn btn-xl btn-block btn-primary br-ts-md-0 br-bs-md-0">
                                                Search Here
                                            </Button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-5 col-lg-5 col-md-12">
                                <img src={main}  className="main-banner-png" alt="img" />
                               
                                   
                                
                            </div>
						</div>
					</div>
				</div>
			</section>
            <section className="sptb bg-white container">
                <Container>
                    <div className="section-title d-md-flex">
                        <div>
                            <h2>Latest Courses</h2>
                            <p className="fs-18 lead">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
					<hr/>
					<div className="row ">
                    {/* Single Course  */}
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="crs_grid">
                            <div className="crs_grid_thumb">
                                <a href="course-detail.html" className="crs_detail_link">
                                    <img src="https://themezhub.net/skillup-demo/assets/img/cr-1.jpg" className="img-fluid rounded" alt="" />
                                </a>
                                <div className="crs_video_ico">
                                    <i className="fa fa-play"></i>
                                </div>
                                <div className="crs_locked_ico">
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="crs_grid_caption">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_cates cl_8"><span>Design</span></div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_inrolled"><strong>8,350 </strong>Enrolled</div>
                                    </div>
                                </div>
                                <div className="crs_title"><h4><a href="course-detail.html" className="crs_title_link">UI/UX Design pattern for succesfull software Applications</a></h4></div>
                                <div className="crs_info_detail">
                                    <ul>
                                        <li><i className="fa fa-clock text-danger"></i><span>10 hr 07 min</span></li>
                                        <li><i className="fa fa-video text-success"></i><span>67 Lectures</span></li>
                                        <li><i className="fa fa-signal text-warning"></i><span>Beginer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="crs_grid_foot">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_tutor">
                                            <div className="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/user-6.jpg" className="img-fluid circle" alt="" /></a></div><div className="crs_tutor_name"><a href="instructor-detail.html">Robert Fox</a></div>
                                        </div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_price"><h2><span className="currency">$</span><span className="theme-cl">149</span></h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="crs_grid">
                            <div className="crs_grid_thumb">
                                <a href="course-detail.html" className="crs_detail_link">
                                    <img src="https://themezhub.net/skillup-demo/assets/img/cr-1.jpg" className="img-fluid rounded" alt="" />
                                </a>
                                <div className="crs_video_ico">
                                    <i className="fa fa-play"></i>
                                </div>
                                <div className="crs_locked_ico">
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="crs_grid_caption">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_cates cl_8"><span>Design</span></div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_inrolled"><strong>8,350</strong>Enrolled</div>
                                    </div>
                                </div>
                                <div className="crs_title"><h4><a href="course-detail.html" className="crs_title_link">UI/UX Design pattern for succesfull software Applications</a></h4></div>
                                <div className="crs_info_detail">
                                    <ul>
                                        <li><i className="fa fa-clock text-danger"></i><span>10 hr 07 min</span></li>
                                        <li><i className="fa fa-video text-success"></i><span>67 Lectures</span></li>
                                        <li><i className="fa fa-signal text-warning"></i><span>Beginer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="crs_grid_foot">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_tutor">
                                            <div className="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/user-6.jpg" className="img-fluid circle" alt="" /></a></div><div className="crs_tutor_name"><a href="instructor-detail.html">Robert Fox</a></div>
                                        </div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_price"><h2><span className="currency">$</span><span className="theme-cl">149</span></h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="crs_grid">
                            <div className="crs_grid_thumb">
                                <a href="course-detail.html" className="crs_detail_link">
                                    <img src="https://themezhub.net/skillup-demo/assets/img/cr-1.jpg" className="img-fluid rounded" alt="" />
                                </a>
                                <div className="crs_video_ico">
                                    <i className="fa fa-play"></i>
                                </div>
                                <div className="crs_locked_ico">
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="crs_grid_caption">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_cates cl_8"><span>Design</span></div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_inrolled"><strong>8,350</strong>Enrolled</div>
                                    </div>
                                </div>
                                <div className="crs_title"><h4><a href="course-detail.html" className="crs_title_link">UI/UX Design pattern for succesfull software Applications</a></h4></div>
                                <div className="crs_info_detail">
                                    <ul>
                                        <li><i className="fa fa-clock text-danger"></i><span>10 hr 07 min</span></li>
                                        <li><i className="fa fa-video text-success"></i><span>67 Lectures</span></li>
                                        <li><i className="fa fa-signal text-warning"></i><span>Beginer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="crs_grid_foot">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_tutor">
                                            <div className="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/user-6.jpg" className="img-fluid circle" alt="" /></a></div><div className="crs_tutor_name"><a href="instructor-detail.html">Robert Fox</a></div>
                                        </div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_price"><h2><span className="currency">$</span><span className="theme-cl">149</span></h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="crs_grid">
                            <div className="crs_grid_thumb">
                                <a href="course-detail.html" className="crs_detail_link">
                                    <img src="https://themezhub.net/skillup-demo/assets/img/cr-1.jpg" className="img-fluid rounded" alt="" />
                                </a>
                                <div className="crs_video_ico">
                                    <i className="fa fa-play"></i>
                                </div>
                                <div className="crs_locked_ico">
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="crs_grid_caption">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_cates cl_8"><span>Design</span></div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_inrolled"><strong>8,350</strong>Enrolled</div>
                                    </div>
                                </div>
                                <div className="crs_title"><h4><a href="course-detail.html" className="crs_title_link">UI/UX Design pattern for succesfull software Applications</a></h4></div>
                                <div className="crs_info_detail">
                                    <ul>
                                        <li><i className="fa fa-clock text-danger"></i><span>10 hr 07 min</span></li>
                                        <li><i className="fa fa-video text-success"></i><span>67 Lectures</span></li>
                                        <li><i className="fa fa-signal text-warning"></i><span>Beginer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="crs_grid_foot">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_tutor">
                                            <div className="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/user-6.jpg" className="img-fluid circle" alt="" /></a></div><div className="crs_tutor_name"><a href="instructor-detail.html">Robert Fox</a></div>
                                        </div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_price"><h2><span className="currency">$</span><span className="theme-cl">149</span></h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="crs_grid">
                            <div className="crs_grid_thumb">
                                <a href="course-detail.html" className="crs_detail_link">
                                    <img src="https://themezhub.net/skillup-demo/assets/img/cr-1.jpg" className="img-fluid rounded" alt="" />
                                </a>
                                <div className="crs_video_ico">
                                    <i className="fa fa-play"></i>
                                </div>
                                <div className="crs_locked_ico">
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="crs_grid_caption">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_cates cl_8"><span>Design</span></div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_inrolled"><strong>8,350</strong>Enrolled</div>
                                    </div>
                                </div>
                                <div className="crs_title"><h4><a href="course-detail.html" className="crs_title_link">UI/UX Design pattern for succesfull software Applications</a></h4></div>
                                <div className="crs_info_detail">
                                    <ul>
                                        <li><i className="fa fa-clock text-danger"></i><span>10 hr 07 min</span></li>
                                        <li><i className="fa fa-video text-success"></i><span>67 Lectures</span></li>
                                        <li><i className="fa fa-signal text-warning"></i><span>Beginer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="crs_grid_foot">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_tutor">
                                            <div className="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/user-6.jpg" className="img-fluid circle" alt="" /></a></div><div className="crs_tutor_name"><a href="instructor-detail.html">Robert Fox</a></div>
                                        </div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_price"><h2><span className="currency">$</span><span className="theme-cl">149</span></h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="crs_grid">
                            <div className="crs_grid_thumb">
                                <a href="course-detail.html" className="crs_detail_link">
                                    <img src="https://themezhub.net/skillup-demo/assets/img/cr-1.jpg" className="img-fluid rounded" alt="" />
                                </a>
                                <div className="crs_video_ico">
                                    <i className="fa fa-play"></i>
                                </div>
                                <div className="crs_locked_ico">
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="crs_grid_caption">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_cates cl_8"><span>Design</span></div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_inrolled"><strong>8,350</strong>Enrolled</div>
                                    </div>
                                </div>
                                <div className="crs_title"><h4><a href="course-detail.html" className="crs_title_link">UI/UX Design pattern for succesfull software Applications</a></h4></div>
                                <div className="crs_info_detail">
                                    <ul>
                                        <li><i className="fa fa-clock text-danger"></i><span>10 hr 07 min</span></li>
                                        <li><i className="fa fa-video text-success"></i><span>67 Lectures</span></li>
                                        <li><i className="fa fa-signal text-warning"></i><span>Beginer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="crs_grid_foot">
                                <div className="crs_flex">
                                    <div className="crs_fl_first">
                                        <div className="crs_tutor">
                                            <div className="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/user-6.jpg" className="img-fluid circle" alt="" /></a></div><div className="crs_tutor_name"><a href="instructor-detail.html">Robert Fox</a></div>
                                        </div>
                                    </div>
                                    <div className="crs_fl_last">
                                        <div className="crs_price"><h2><span className="currency">$</span><span className="theme-cl">149</span></h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 mt-2 pb-5">
                        <div className="text-center"> <NavLink className="btn btn-md theme-bg-light theme-cl " to="/services">Explore More Cources</NavLink></div>
                    </div>
                </div>
                </Container>
            </section>
			
           </Row>
    );
};

export default Home;