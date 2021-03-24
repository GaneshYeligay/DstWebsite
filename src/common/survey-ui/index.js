import React, { useState } from "react";
import radium from "radium";
import { Modal,Container,Button,Row,Col} from 'react-bootstrap';
import Styles from "./survey-ui.module.css";

function Option({ caption, ch }) {
  return (
    <>
    <div className="col-xs-12 col-lg-1 col-md-1"></div>
    <div className="col-12">
      <div className={`${Styles.optionRoot} ${Styles.shadow}`} style={{}}>

        <div className={Styles.numberCircle}>{ch}</div>


        <div className={Styles.optionCaption}><span>{caption}</span></div>
      </div>

    </div>
    <div className="col-xs-12 col-lg-1 col-md-1"></div>
    </>
  )
}


const Dropquery = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>

      <style type="text/css">
        {`
    .btn-primary{
      padding: 5px;
      
    }
    `}
      </style>
      <Button variant="primary" onClick={handleShow} style={{
        float: "right", marginTop: "-2%", paddingLeft: "4%",
        paddingRight: "4%", position: "fixed", bottom: "6px", right: "10px"
      }}>
        Drop Us a Query
          </Button>

      {/* <style type="text/css">
        {`
    .modal-content {
      
      border-radius: 20px;
      width: 140vh;
      height: 96vh;
      margin-top: -2%;
      margin-left: -28%
    }
    @media screen and (min-width: 768px) and (max-width: 991px){
      .modal-content {
        border-radius: 20px;
        width: 72vh;
        height: 86vh;
        margin-top: -2%;
        margin-left: -24%;
    }
    }
    @media screen and (width: 800px) and (height: 1280px){
      .modal-content {
        border-radius: 20px;
        width: 58vh;
        height: 86vh;
        margin-top: -2%;
        margin-left: -24%;
    }
    }
    @media only screen and (width: 1024px) and (height: 1366px){
      .modal-content {
        border-radius: 20px;
        width: 65vh;
        height: 96vh;
        margin-top: -2%;
        margin-left: -34%;
    }
    }
    @media only screen and (width: 1024px) and (height: 768px){
      .modal-content {
        width: 130vh;
        margin-left: -50%
    }
    }
    @media only screen and (width: 1366px) and (height: 1024px){
      .modal-content {
        width: 127vh;
        margin-left: -79%
    }
    }
    @media screen and (max-width: 575px){
      .modal-content {
        border-radius: 20px;
        width: 53vh;
        height: 96vh;
        margin-top: 2%;
        margin-left: 2%;
        text-align: center;
    }
    }
    @media screen and (min-width: 600px) and (max-width: 699px){
      .modal-content{
      border-radius: 20px;
    width: 56vh;
    height: 96vh;
    margin-top: -2%;
    margin-left: -8%;
    }
  }
    `}
      </style> */}

      <Modal
      size="lg"
        centered
        style={{ opacity: 1 }}
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        dialogClassName="modal-90w"
        // variant="mod-body"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="title">
              <h1 style={{ fontWeight: "600" }}>
                Hello,What can we help you with?
                  </h1>
            </div>
          </Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        
           
         <Container>
           <Row>
          <Option ch="A" caption="Embedded Services" />
          <Option ch="B" caption="Software Development" />
          <Option ch="C" caption="AI/IOT Solutions"/>
          <Option ch="D" caption="Testing Automation" />
          <Option ch="E" caption="Other services" />
          </Row>

          </Container>
          


        </Modal.Body>

        <Modal.Footer>


        </Modal.Footer>
      </Modal>

    </>

  );
}


export default radium(Dropquery);
