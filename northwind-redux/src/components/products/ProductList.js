import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Badge, Button, Table} from 'reactstrap'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'

import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'


class ProductList extends Component {

  componentDidMount(){
    this.props.actions.getProducts();
  }

  addToCart=(product)=>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.productName+" has been added to your cart")

  }
  render() {
    return (
      <div>
        <h3>
        <Badge color="warning">
        Products
        </Badge>
        </h3>
        
        <Badge color="success">
          {this.props.currentCategory.categoryName}
        </Badge>
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity per Unit</th>
            <th>Units in Stock</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product=>(
           <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td><Link to={"save-product/"+product.id}>{product.productName}</Link></td>
            <td>{product.unitPrice}</td>
            <td>{product.quantityPerUnit}</td>
            <td>{product.unitsInStock}</td>
            <td><Button color="success" onClick={()=>this.addToCart(product)}>Add to cart</Button></td>

          </tr> 
          ))}
          
        </tbody>
      </Table>
      </div>
    )
  }
}


function mapStateToProps(state){
  return { // Buradaki return ProductList'in props'larına ekleme yapıyor.
    currentCategory:state.changeCategoryReducer, // Bu state aslında rootReducer.ChangeCategoryReducer'ı seçiyor.
    products:state.productListReducer
  } 
}

function mapDispatchToProps(dispatch){
  return { // Buradaki return ProductList'in props'larına ekleme yapıyor.
    actions:{ // === this.props.actions
      getProducts:bindActionCreators(productActions.getProducts,dispatch), // this.props.actions.getProducts
      addToCart:bindActionCreators(cartActions.addToCart,dispatch),
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ProductList) // connect de bir fonksiyon, ilgili component'i return ediyor.
