import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Container, Table, Popover, Button, OverlayTrigger } from "react-bootstrap";

function PastOrder() {
  const { viewPastOrderState } = useContext(OrderContext);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        {viewPastOrderState.items.map(item => (
         <p>{item.productName}</p>
        ))}
      </Popover.Content>
    </Popover>
  );

  const ItemPopOver = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button size={"lg"} variant="link">{viewPastOrderState.items.length}</Button>
    </OverlayTrigger>
  );
  

  console.log(viewPastOrderState);
  return (
    <Container>
      <h1>Past Order</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr key={viewPastOrderState._id}>
            <th>ID</th>
            <td>{viewPastOrderState._id}</td>
          </tr>
          <tr>
            <th>Table Number</th>
            <td>{viewPastOrderState.tableNum}</td>
          </tr>
          <tr>
            <th>Items</th>
            <td><ItemPopOver /></td>
          </tr>
          <tr>
            <th>Gratutity</th>
            <td>{viewPastOrderState.gratuity}%</td>
          </tr>
          <tr>
            <th>Tax</th>
            <td>{viewPastOrderState.tax}%</td>
          </tr>
          <tr>
            <th>Grand Total</th>
            <td>${viewPastOrderState.grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default PastOrder;