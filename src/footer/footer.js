import styled from "styled-components";
let Box = styled.div`
  margin-top:50px;
  padding-top:50px;
  background-color:black;
  justify-content:center;
  gap:3rem;
  display:flex;
  text-align:left;
  line-height:2;
  color:grey;
  padding-right:55px;
`;

function Footer (){
  return(
    <footer>
   
      <Box>
     <ul>
       <li style={{fontWeight:700,color:"#fff"}}>새로운 소식</li>
       <li>멤버가입</li>
       <li>매장안내</li>
       <li>JAKE Shoes 저널</li>
     </ul>
     <ul>
       <li style={{fontWeight:700,color:"#fff"}}>도움말</li>
       <li>결제 방법</li>
       <li>주문배송조회</li>
       <li>반품 정책</li>
       <li>문의하기</li>
     </ul>
     <ul>
       <li style={{fontWeight:700,color:"#fff"}}>ABOUT JAKE</li>
       <li>소식</li>
       <li>지속가능성</li>
     </ul>
     </Box>
 </footer>
  )
}
export default Footer