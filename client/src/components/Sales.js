import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Sales from "./Sales/Sales";


const Salesform = () =>

<Container fluid>
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12 sm-12">
      <Jumbotron>
        <h1><strong>Sales Form</strong></h1>
        <p>Quickly see the sales and inventory levels. </p>
      </Jumbotron>
    </Col>
  </Row>

    {/* Row #2 */}
    <Row fluid>
      {/* Vertical Menu */}
      <Col size="md-2 sm-2">
        <VerticalMenu />
      </Col>

      {/* Dashboard Content */}
      <Col size="md-10 sm-10">
        <div className='private text-center'>
          <Sales />
        </div>
      </Col>
    </Row>
  </Container>

export default Salesform;



// import React, { Component } from "react";
// import Jumbotron from "./Jumbotron";
// import API from "../utils/salesAPI.js";
// import DeleteBtn from "./DeleteBtn";
// import { Col, Row, Container } from "./Grid";
// import { List, ListItem } from "./List";
// import { Input, TextArea, FormBtn } from "./Form";
// import VerticalMenu from "./VerticalMenu";

// class Sales extends Component {
//     state = {
//         sales: []
//     };

//     componentDidMount() {
//         this.loadSales();
//     }

//     loadSales = () => {
//         console.log("loadSales..Sales.js");
//         API.getSales({
//             repRepId: localStorage.getItem('rep_id')
//         })
//         .then(res => {
//             console.log("response to loadSales..Sales.js");
//             console.log(res);
//             this.setState({ sales: res.data })
//         })
//         .catch(err => console.log(err));
//     };

//     render() {
//         return (
//             <Container fluid>
//                 <Row>
//                     <Col size="md-12">
//                         <Jumbotron>
//                             <h1>Sales</h1>
//                         </Jumbotron>
//                         <VerticalMenu />
//                     </Col>
//                     <Col size="md-12">
//                         {this.state.sales.length ? (
//                             <List>
//                                 {this.state.sales.map(sale => (
//                                     <ListItem key={sale.sale_id}>
//                                         <a href={"/sale/" + sale.sale_id}>
//                                             <strong>
//                                                 {/* {sale.sale_id} */}
//                                                 {sale.sale_product}
//                                                 {sale.sale_customer}
//                                                 {sale.sale_quantity}
//                                                 {sale.sale_purchasePrice}
//                                                 {sale.sale_note}
//                                             </strong>
//                                         </a>
//                                         <DeleteBtn />
//                                     </ListItem>
//                                 ))}
//                             </List>
//                         ) : (
//                                 <h3>No Results to Display</h3>
//                             )}
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default Sales;