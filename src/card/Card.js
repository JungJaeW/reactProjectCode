import { Col} from "react-bootstrap";

function Card(props) {
  return (
    <Col sm={4}>
      <img
        style={{ cursor: "pointer", width: "80%" }}
        onClick={() => {
          props.navigate("/detail/" + props.i);
        }}
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}
export default Card;