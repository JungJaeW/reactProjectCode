import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import {  useEffect, useState } from "react";
import data from "./data.js";
import { Routes, Route,  useNavigate } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
import Cart from "./routes/Cart";
import Footer from "./footer/footer";
import Card from "./card/Card";
SwiperCore.use([Navigation, Pagination, Autoplay])
function App() {
  
  useEffect(()=>{
    localStorage.setItem('watched',JSON.stringify([]))
  },[])
  let [shoes, setShoes] = useState(data);
  let [change,setChange] = useState(2);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate("/")}}>JAKE Shoes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <div className="main-bg"></div> */}
              <div className="mainPage">
                <div className="img1"></div>
                <div className="img2"></div>
              </div>
              <h1 className="h1" style={{fontWeight:700,marginTop:"20px"}}>New Design</h1>
              <div className="div-container">
              <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
     
    >
      <SwiperSlide><div className="div div1"></div></SwiperSlide>
      <SwiperSlide><div className="div div2"></div></SwiperSlide>
      <SwiperSlide><div className="div div3"></div></SwiperSlide>
      <SwiperSlide><div className="div div4"></div></SwiperSlide>
      
    </Swiper>
    </div>
    <h1 style={{fontWeight:700}}>Products</h1>
              <Container>
                <Row>
                  {shoes.map((a, i) => {
                    return (
                      <Card
                        navigate={navigate}
                        shoes={shoes[i]}
                        i={i}
                        key={i}
                        
                      ></Card>
                    );
                  })}
                </Row>
              </Container>
             
              <button className="btn1"
                onClick={() => {
                  if(change<3){
                  axios
                  .get("https://codingapple1.github.io/shop/data"+2+".json")
                  .then((결과) => {
                    let copy = [...shoes, ...결과.data];
                    console.log(copy)
                    setShoes(copy);
                    setChange(change+1)
                    console.log(change)
                  })
              // }else if(change<4){
              //   axios
              //   .get("https://codingapple1.github.io/shop/data"+3+".json")
              //   .then((결과) => {
              //     console.log(change)
              //     let copy1 = [...shoes, ...결과.data];
              //     setShoes(copy1);
              //     console.log(copy1)
              //     setChange(change+1)
              //   })
              }else{
                alert("마지막 상품입니다.")
                document.querySelector("button").style.display ='none';
              }
                }
                 }
              >
                더보기
              </button>
              <div>
    </div>
              <Footer></Footer>
              
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
     
    </div>
  );
}

export default App;
