import React, { useEffect, useState } from 'react';
import {Button, Row, Container } from 'react-bootstrap';
import main from '../../assets/main.png'
import './Home.css';
import { NavLink } from 'react-router-dom';
import Courses from '../Courses/Courses';


const Home = () => {
    // set data on couses
    const [course,setCourse] = useState([]);
    // get latest 6 course
    const latestCourse = course.slice(0,6);
    // fetch data
    useEffect( () => {
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => setCourse(data));
    },[]);

    return (
        <Row>
            <section className="sptb-2 sptb-tab">
				<div className="header-text mb-0">
					<div className="container">
						<div className="row">
							<div className="col-xl-7 col-lg-7 col-md-12">
								<div className="text-body mb-7">
									<h1 className="mb-1 leading-tight ">The World's Largest Selection of Courses</h1>
									<p className="pt-5">E-learning for kids is a non-profit organization providing free, fun, curriculum based quality primary education to all children world wide. The foundation was launched in the USA in 2004 and in the Netherlands in 2007.It is a long established fact that a reader will be distracted by the readable.</p>
								</div>
								<div className="search-background bg-transparent">
									<div className="form row g-0 pt-5">
										<div className="col-xl-3 col-lg-3 col-md-12 mb-0">
                                            <Button variant="primary" type="submit" className="btn btn-xl btn-block btn-primary br-ts-md-0 br-bs-md-0">
                                                Explor Now
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
					<div className="row">

                  
                        {
                            // loop course
                            latestCourse.map(course => <Courses
                                key={course.key}
                                course={course}
                            
                            ></Courses>)
                        }
                   
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