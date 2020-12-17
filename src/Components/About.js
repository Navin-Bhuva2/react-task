import React, { Component } from 'react';
import ZsTabs from '../module/component/tabs/zsTabs';
import audi_4 from "./img/audi_4.jpg"

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <h1 style={{textAlign:"center"}}>Avout GO ibibo travel</h1>
         <div>
                        <img src={audi_4} className="severity-content" alt="audi_4"></img>
                     </div>
         {/* <div className="nine columns main-col"> */}
            {/* <ZsTabs></ZsTabs> */}
         

            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
               
            </div>
        

   </section>
    );
  }
}

export default About;
