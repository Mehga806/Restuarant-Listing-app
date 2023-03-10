import React from 'react'
import  { useState } from 'react';
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Payment from './Payment';
import { Link } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';



function RestuarantOP({ op }) {
    console.log(op);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button className="btn btn-danger" variant="danger" onClick={handleShow}>
      Restuarant Operating Hours
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Operating Hours</Modal.Title>
      </Modal.Header>
      <ModalBody>
      <ListGroup>
      <ListGroup.Item>Monday : {op.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {op.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {op.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday : {op.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {op.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {op.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {op.Sunday}</ListGroup.Item>
      <Link to={'/Payment'}>
      <Button className=' mx-2  my-3' variant="outline-success">Place Order</Button>{' '}
      </Link>

     
    </ListGroup>
    </ModalBody>
    
    </Modal>
  </>

    
  )
}

export default RestuarantOP