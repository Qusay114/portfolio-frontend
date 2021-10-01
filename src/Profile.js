import React from 'react';
//bootstrap components
import {Card} from 'react-bootstrap';
import {Col , Row  } from 'react-bootstrap';
//antd components
import { Popover, Button , Timeline  } from 'antd';

//css files
import './css/profile.css'

export default function Profile() {
    return (
      <>
      <Card id='profileCard' >
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="8">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src='https://pbs.twimg.com/profile_images/1393672180534333441/bv1mBeqf_400x400.jpg'
                          />
                        </a>
                      </div>
                    </Col>
                   
                    <Col className="order-lg-1" lg="3">
                      <div className="card-profile-stats d-flex justify-content-center">
                      <ul>
                        <li>
                        <div>                       
                          <span className="education"> <Popover content={
                          <Timeline>
                            <Timeline.Item color='green' >Start Electrical Engineering bachelor in The University of Jordan <br></br>2015-09-01</Timeline.Item>
                            <Timeline.Item color='green' >Graduated from The University of Jordan <br></br>2020-02-11</Timeline.Item>
                            <Timeline.Item color="blue">Start intensive program in software development at <br></br>Abdul Aziz Al Ghurair School of Advanced Computing (ASAC) <br></br> 2021-02-28</Timeline.Item>
                            <Timeline.Item color='blue' >Graduated from Abdul Aziz Al Ghurair School of Advanced Computing (ASAC) <br></br>2021-09-09</Timeline.Item>                          
                          </Timeline>
                        } title="Education" placement="rightTop">
                            <Button type="primary">2+ Education</Button>
                                  </Popover>
                          </span>
                        </div>
                        </li>
                        <li>
                        <div>           
                          <span className="skills"> <Popover content={
                          <ul>
                            <li>Teamworking.</li>
                            <li>Selflearning.</li>
                            <li><div className="title">Programming Languages:</div> Java , JavaScript</li>
                            <li><div className="title">Frameworks:</div> Spring boot , ExpressJS</li>
                            <li>NodeJS</li>
                            <li>ِAndroid Development</li>
                            <li><div className="title">Libraries:</div> ReactJS , Bootstrap , Ant Design , Material Design bootstrap  </li>
                            <li><div className="title">Tools:</div> Bash, Powershell, thymeleaf ,  Git, GitHub , Gradle , Maven, VS Code, IntelliJ<br></br> Heroku, MongoDB,
                                 Postgresql , Netflify , AWS Services , Firebase</li>                                                   
                          </ul>
                          
                          } title="skills" placement="rightTop" >
                            <Button type="primary">15+ Skills</Button>
                                  </Popover>
                          </span>
                        </div>
                        </li>
                        <li>
                        <div>                       
                          <span className="languages"> <Popover content={<ul><li>Arabic</li><li>English</li></ul>} title="Languages" placement="rightTop">
                            <Button type="primary">2+ Languages</Button>
                                  </Popover>
                          </span>
                        </div>
                        </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Qusay Al-Amarat{" "}
                      
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Al-Mafraq, Jordan
                    </div>
                    
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Full Stack Developer , Electrical Engineer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      ASAC , The University of Jordan
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                  <h1>!coder problems solver </h1>
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p style={{}}>
                          Hello There , welcome to my Portfolio , I'm Qusay Al-Amarat from jordan I have a bachelor degree in electrical engineering , I'm very passionate in programming field , so I made a shift career to be able to work in this field , and I took an intensive program in Software Development
                           at Luminus Technical University College in ASAC .
                           <br></br>
                           <br></br>
                          Throughout my education, I’ve become equipped with the necessary knowledge 
                          that come with Full Stack Developer position , including Java , JavaScript , NodeJS , Spring boot framework , Android Development , 
                          Html , CSS , ReactJS , Bootstrap , ANTD library and MDReact library 
                          <br></br>
                          (these are some of my skills you can check them all in the skills section)
                          <br></br>
                          <br></br>
                          Briefly , I'm someone dreams of big things , every time will try to do better ,
                           will adapt and will try to develop everything wherever he is .                           
                        </p>
                        
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
      </>
    )
}


