import styled from "styled-components";

const ZsCardWrapper = styled.div`
  font-family: Roboto-Regular;
  .zsCard {
    margin: 3px;
    margin-bottom: 20px;

    .zsCardHeader {
      font-family: Orbitron;
      position: relative;
      height: 37px;
      line-height: 37px;
      left: 1px;
      top: 1px;
      // margin-bottom: 10px;
      background-image: linear-gradient(
        to bottom,
        rgba(24, 198, 255, 0.35),
        rgba(19, 33, 41, 0.35)
      );
      overflow: hidden !important;
      white-space: nowrap !important;
      text-overflow: ellipsis !important;

      &:before {
        display: block;
        content: "";
        width: 7px;
        height: 7px;
        position: absolute;
        top: -1px;
        left: -1px;
        border-top: 2px solid #17c5fe;
        border-left: 2px solid #17c5fe;
      }

      &:after {
        display: block;
        content: "";
        width: 7px;
        height: 7px;
        position: absolute;
        top: -1px;
        right: -1px;
        border-top: 2px solid #17c5fe;
        border-right: 2px solid #17c5fe;
      }

      span {
        font-size: 16px;
        letter-spacing: 1.92px;
        text-align: left;
        color: #ffffff;
        margin-left: 15px;
        opacity: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:before {
          display: block;
          content: "";
          width: 7px;
          height: 7px;
          position: absolute;
          bottom: -1px;
          left: -1px;
          border-bottom: 2px solid #17c5fe;
          border-left: 2px solid #17c5fe;
        }

        &:after {
          display: block;
          content: "";
          width: 7px;
          height: 7px;
          position: absolute;
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid #17c5fe;
          border-right: 2px solid #17c5fe;
        }
      }
    }

    .zsCardBody {
      padding: 0px 15px;
      overflow: hidden;
      background-image: linear-gradient(
        to bottom,
        rgba(24, 198, 255, 0.1),
        rgba(19, 33, 41, 0.39)
      ) !important;
    }

    .zsCardFooter {
    }
  }
`;

export default ZsCardWrapper;
