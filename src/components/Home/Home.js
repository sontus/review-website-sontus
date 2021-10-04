import React from 'react';
import { Form, Button, Row, Container } from 'react-bootstrap';
import main from '../../assets/main.png'
import './Home.css';


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
            <section className="sptb bg-white">
                <Container>
                    <div className="section-title d-md-flex">
                        <div>
                            <h2>Latest Courses</h2>
                            <p className="fs-18 lead">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </Container>
            </section>
           </Row>
    );
};

export default Home;