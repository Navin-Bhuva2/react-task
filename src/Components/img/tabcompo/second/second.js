import React, { Component } from 'react';
import styled from 'styled-components'
import audi1 from "../../audi1.jpg"
import audi2 from "../../audi2.jpg"
import '../tabcompo.css';
import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'
class Second extends Component {
    render() {
        return (
            <div className="container">
                 <div className="row">
            <div className="col-6">
                <Card >
                    <CardBody>
                        <img src={audi1} className="severity-content1" alt="audi1"></img>
                        <Text><BoldText>Audi  series</BoldText></Text> <hr></hr>
                        <TextSmallSecondary style={{ marginTop: "-20px" }}>
                            <i className="fa fa-address-book"></i>
                            <span style={{ marginRight: "25px" }}>4 Seat</span>
                            <i className="fa fa-suitcase"></i>
                            <span style={{ marginRight: "25px" }}>4 Laggage</span>
                            <i className="fa fa-cog"></i>
                            <span>AC/Non AC</span>

                        </TextSmallSecondary>
                        {/* <TextSmallSecondary>USD $29</TextSmallSecondary> */}
                        {/* <StockStatus><BoldText>12</BoldText> left in stock</StockStatus> */}
                    </CardBody>
                </Card>
            </div>
            <div className="col-6">
                <Card >
                    <CardBody>
                        <img src={audi2} className="severity-content1" alt="audi2"></img>
                        <Text><BoldText>Audi 7 series</BoldText></Text> <hr></hr>
                        <TextSmallSecondary style={{ marginTop: "-20px" }}>
                            <i className="fa fa-address-book"></i>
                            <span style={{ marginRight: "25px" }}>4 Seat</span>
                            <i className="fa fa-suitcase"></i>
                            <span style={{ marginRight: "25px" }}>4 Laggage</span>
                            <i className="fa fa-cog"></i>
                            <span>AC/Non AC</span>

                        </TextSmallSecondary>
                        {/* <TextSmallSecondary>USD $29</TextSmallSecondary> */}
                        {/* <StockStatus><BoldText>12</BoldText> left in stock</StockStatus> */}
                    </CardBody>
                </Card>
                </div>
            </div>
        </div>)
    }
}

const Text = styled.div`
  margin: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #1F3B57;
`

const TextSmall = styled(Text)`
  font-size: 1.5rem;
`

const TextSmallSecondary = styled(TextSmall)`
  color: black;
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
  background: #f1f1f1;
  display: flex;
  align-items: center;
  max-width: 300px;
  margin-bottom: 10px;
  display: block;
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
export default Second;