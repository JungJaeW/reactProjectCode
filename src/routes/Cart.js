import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
import { addCount, deleteItem } from "../store.js";
function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();
  return (
    <div>
      <h2 style={{marginRight:"30px;"}}>
        {state.user.name}
        {state.user.age}의 장바구니
      </h2>

      <Table>
        <thead>
          <tr>
            <th>상품고유번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button style={{
                  backgroundColor:"black",
                  color:"white",
                  fontWeight:"700",
                  borderRadius:"10%"
                }} onClick={()=>{
                  dispatch(deleteItem(state.cart[i]))
                }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
