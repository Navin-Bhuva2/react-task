import styled from "styled-components";
import activeTab from "./icons/activeTab.svg";
import addNewDash from "./icons/addDashIcon.svg";
// import unSelectTab from "../../../../core/images/unSelectTab.svg";

const ZsTabsWrapper = styled.div`
  font-family: Roboto-Regular;
  .nav {
    flex-wrap: nowrap !important;
  }
  .nav-tabs {
    margin-bottom: 11px;
   
    display: -moz-box;
    scrollbar-width: thin;
    scrollbar-color: #1cb9e8 transparent !important;
    // height: 50px;
    border-bottom: 1px solid #000000;
  }

  .nav-tabs .nav-link {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 50px;
    letter-spacing: 1.92px;
    text-align: left;
    color: rgba(255, 255, 255, 0.6);
    border: none;
    padding: 0 18px;
    margin-left: 2px;
    margin-right: 2px;
    width: 185px;
    background-size: 100% 100%;
    overflow: auto;
    text-overflow: ellipsis;

    &:hover {
      color: #fff;
    }
  }
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    color: #fff;
    opacity: 1;
    font-weight: bold;
    margin-bottom: -2px;
    // width: 200px;
    background: transparent url(${activeTab}) center center no-repeat;
    background-size: 100% 100%;
  }
  .nav-link[data-rb-event-key="addNewDash"] {
    font-weight: bold;
    width: 35px;
    height: 35px;
    margin-top: 8px;
    margin-left: 8px;
    background: transparent url(${addNewDash}) center center no-repeat;
    background-size: 100% 100%;
    line-height: 35px;
    padding: 0 0 0 3px;
    text-align: center;
  }
  .nav-link[data-rb-event-key="left"] {
    font-weight: bold;
    width: 35px;
    height: 35px;
    margin-top: 8px;
    margin-left: 8px;
    background: transparent url(${addNewDash}) center center no-repeat;
    background-size: 100% 100%;
    line-height: 35px;
    padding: 0 0 0 3px;
    text-align: center;
  }
  // .tab-content > .active{
  //   height:81vh;
  // }
  .tab-content {
    background: transparent;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 85vh;
    // overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: #1cb9e8 transparent !important;
    // overflow-x: hidden;
  }
  .tab-content::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: rgba(51, 80, 153, 0.6);
  }
  // .nav-tabs:hovor{
  //   overflow-x: scroll;
  //   overflow-y: hidden;
  // }
  // .nav-tabs .nav-link:focus{
  //    visibility : hidden;
  // }
  .nav-tabs .nav-link:focus {
    outline: none;
  }
`;
export default ZsTabsWrapper;
