import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import bg from './bg.png'
import { useState } from 'react';
import shoesData from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {
  let [shoes] = useState(shoesData);
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/detail")}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
      </div>
      <Routes>
        <Route path="/" element={ 
          <div className="container">
            <div className="row">
              { shoes.map((a, i)=>{
                return <ShoesComponent shoes={shoes[i]} i={i} ></ShoesComponent>
              })}
            </div>
          </div>
        } />  
        <Route path="/detail" element={ <div>상세페이지임</div> } />
        <Route path="/about" element={ <About/> }>
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>
      </Routes>
    </>
  );
}

function ShoesComponent(props){
  return (
    <>
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </div>
    </>
  )
}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
