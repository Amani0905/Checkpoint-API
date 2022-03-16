import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


const UserList = ({user}) => {
  return (
   <div className="userList">
        <ListGroup >
      {user.map((el) => (


        <div className=" list" key={el.id} style={{borderStyle:"solid", borderColor:"#048b9a"}}>
          <ListGroup.Item style={{backgroundColor:"#cd4f30"}}><button className="btn btn-light" >ID:{el.id}</button>  </ListGroup.Item>
          <ListGroup.Item> Name: {el.name} </ListGroup.Item>
          <ListGroup.Item> Username: {el.username}</ListGroup.Item>
          <ListGroup.Item href="#"> Email: {el.email}</ListGroup.Item>
          <ListGroup.Item>  Street :{el.address.street}</ListGroup.Item>
          <ListGroup.Item>  Suite:{el.address.suite }</ListGroup.Item>
          <ListGroup.Item variant="success"> Phone: {el.phone}</ListGroup.Item>
          <ListGroup.Item> Company Name: {el.company.name}</ListGroup.Item>
          <ListGroup.Item> Company bs: {el.company.bs}</ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: "#048b9a"}}> Website: {el.website}</ListGroup.Item>

        </div>
      ))}
                </ListGroup>
    </div>

  );
};

export default UserList