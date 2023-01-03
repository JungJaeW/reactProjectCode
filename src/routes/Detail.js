import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addItem } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// let YellowBtn = styled.button`
//   background: yellow;
//   color: black;
//   padding: 10px;
// `;
// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(x => x.id == id);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [fade2, setFade2] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 5000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id)
  
    //Set으로 바꿨다가 다시 array로 만들기
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])
  return (
    <div className={"container start " + fade2}>
      {alert == true ? (
        <div className="alert alert-warning">특별판매가</div>
      ) : null}
      {/* <Box></Box> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + ++id + ".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              if(window.confirm(`
장바구니에 담겼습니다. 
페이지로 이동하시겠습니까?`)){
                navigate("/cart")
                dispatch(
                  addItem({
                    id: `${찾은상품.id}`,
                    name: `${찾은상품.title}`,
                    count: 1,
                  })
                );
              }else{
                dispatch(
                  addItem({
                    id: `${찾은상품.id}`,
                    name: `${찾은상품.title}`,
                    count: 1,
                  })
                );
              }
               
              
             
            }}
          >
            장바구니
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link 
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            상품설명!
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            정품여부
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            가격
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} 찾은상품={찾은상품}/>
    </div>
  );
}
// function TabContent(props) {
//   if (props.탭 == 0) {
//     return <div>내용0</div>;
//   } else if (props.탭 == 1) {
//     return <div>내용1</div>;
//   } else if (props.탭 == 2) {
//     return <div>내용2</div>;
//   }
// }
function TabContent({ 탭,찾은상품}) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [탭]);
  return (
    <div className={"start " + fade}>
      {[<div>{찾은상품.content}</div>, <div>정품만 취급 합니다.</div>, <div>{찾은상품.price}원</div>][탭]}
    </div>
  );
}
export default Detail;
