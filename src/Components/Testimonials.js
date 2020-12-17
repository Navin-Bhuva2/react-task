import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Card from 'react-bootstrap/Card'
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css'
import Button from 'react-bootstrap/Button'
import { render } from 'react-dom'
import styled from 'styled-components'

class Testimonials extends Component {
   render() {
      const settings = {
         dots: true,
         arrows: true,
         infinite: false,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         appendDots: dots => {
            return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
         }
      };
      if (this.props.data) {
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <blockquote>
                  <p>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </li>
         })
      }

      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row">
                  <h1 style={{position: "relative", margin: "0 0 0 310px", top: "-40px", color:"black", fontSize: "30px"}}>Testimonial</h1>
                  <div className="ten columns flex-container">
                     <ul className="slides">
                        <Slider {...settings}>
                           <Card >
                              <CardBody>
                                 <Text><BoldText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text of the printing and typesetting industry</BoldText></Text>
                                 <div id="pImg"><span style={{position: "relative", top: "-3px"}}>NB</span></div>
                           <div id="rightArea">
                              <div className="pMainName" style={{margin: "-52px 0 0 60px",fontWeight: "bold" }}>Navin Bhuva</div>
                              <div className="pRole" style={{margin: "0 0 0 60px"}}>Khari</div>
                              {/* <div style={{ cursor: "pointer", color: "rgb(32 124 217)", fontSize: "13px" }} id="user_changepass" className="userBtns" onClick={this.openchangePassModal} >Change Password</div> */}
                           </div>
                              </CardBody>
                           </Card>
                           <Card >
                              <CardBody>
                                 <Text><BoldText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text of the printing and typesetting industry</BoldText></Text>
                                 <div id="pImg"><span style={{position: "relative", top: "-3px"}}>NB</span></div>
                           <div id="rightArea">
                              <div className="pMainName" style={{margin: "-52px 0 0 60px",fontWeight: "bold" }}>Navin Bhuva</div>
                              <div className="pRole" style={{margin: "0 0 0 60px"}}>Khari</div>
                              {/* <div style={{ cursor: "pointer", color: "rgb(32 124 217)", fontSize: "13px" }} id="user_changepass" className="userBtns" onClick={this.openchangePassModal} >Change Password</div> */}
                           </div>
                              </CardBody>
                           </Card>
                           <Card >
                              <CardBody>
                                 <Text><BoldText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text of the printing and typesetting industry</BoldText></Text>
                                 <div id="pImg"><span style={{position: "relative", top: "-3px"}}>NB</span></div>
                           <div id="rightArea">
                              <div className="pMainName" style={{margin: "-52px 0 0 60px",fontWeight: "bold" }}>Navin Bhuva</div>
                              <div className="pRole" style={{margin: "0 0 0 60px"}}>Khari</div>
                              {/* <div style={{ cursor: "pointer", color: "rgb(32 124 217)", fontSize: "13px" }} id="user_changepass" className="userBtns" onClick={this.openchangePassModal} >Change Password</div> */}
                           </div>
                              </CardBody>
                           </Card>
                           <Card >
                              <CardBody>
                                 <Text><BoldText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text of the printing and typesetting industry</BoldText></Text>
                                 <div id="pImg"><span style={{position: "relative", top: "-3px"}}>NB</span></div>
                           <div id="rightArea">
                              <div className="pMainName" style={{margin: "-52px 0 0 60px",fontWeight: "bold" }}>Navin Bhuva</div>
                              <div className="pRole" style={{margin: "0 0 0 60px"}}>Khari</div>
                              {/* <div style={{ cursor: "pointer", color: "rgb(32 124 217)", fontSize: "13px" }} id="user_changepass" className="userBtns" onClick={this.openchangePassModal} >Change Password</div> */}
                           </div>
                              </CardBody>
                           </Card>
                           <Card >
                              <CardBody>
                                 <Text><BoldText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text of the printing and typesetting industry</BoldText></Text>
                                 <div id="pImg"><span style={{position: "relative", top: "-3px"}}>NB</span></div>
                           <div id="rightArea">
                              <div className="pMainName" style={{margin: "-52px 0 0 60px",fontWeight: "bold" }}>Navin Bhuva</div>
                              <div className="pRole" style={{margin: "0 0 0 60px"}}>Khari</div>
                              {/* <div style={{ cursor: "pointer", color: "rgb(32 124 217)", fontSize: "13px" }} id="user_changepass" className="userBtns" onClick={this.openchangePassModal} >Change Password</div> */}
                           </div>
                              </CardBody>
                           </Card>
                          
                           
                          
                           
                        </Slider>

                     </ul>
                  </div>
               </div>
            </div>
         </section >
      );
   }
}
const Text = styled.div`
  margin: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #1F3B57;
`

const TextSmall = styled(Text)`
  font-size: 0.75rem;
`

const TextSmallSecondary = styled(TextSmall)`
  color: #63778E;
`

const StockStatus = styled(TextSmall)`
  margin-top: 14px;
  color: #0E6946;
`

const BoldText = styled.span`
  font-weight: 600;
`

const Card = styled.div`
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  align-items: center;
  max-width: 400px;
  margin-bottom: 10px;
  width : 45%;
  height: 150px;
  display: block !important;
  margin-left: auto;
  margin-right: auto;
`

const CardBody = styled.div`
  padding: 0rem 1rem 0rem 1rem;
`

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  background: #76869B;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
`
export default Testimonials;
