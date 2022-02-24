import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, ListGroup,ListGroupItem } from 'reactstrap';
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from '../../redux/actions/productActions'


class CategoryList extends Component {

  componentDidMount(){
    this.props.actions.getCategories();
  }
  selectCategory=category=>{
    // ()=>this.props.actions.changeCategory(category)
    // Bu kodu sürekli onClick gibi çağıracağımız eventlerde bu şekilde yazmaktansa bu tarz kolay bir fonksiyon yazıp sadece onu çağırabiliriz.
    this.props.actions.changeCategory(category)
    this.props.actions.getProducts(category.id)
  } 

  render() {
    return (
      <div>
        <h3>
        <Badge color="warning">
        Categories
        </Badge>
        </h3>
       
        <ListGroup>
          {this.props.categories.map((category)=>(
            <ListGroupItem active={category.id===this.props.currentCategory.id} onClick={()=>this.selectCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        {/* <h5>Selected Category:{this.props.currentCategory.categoryName}</h5> Bir satırın compile edilmesi sorun olunca aşağıdakilerde de sorun varmış gibi olabiliyor. */}

        
      </div>
    )
  }
}

function mapStateToProps(state){
    return { // Buradaki return CategoryList'in props'larına ekleme yapıyor.
      currentCategory:state.changeCategoryReducer, // Bu state aslında rootReducer.ChangeCategoryReducer'ı seçiyor.
      categories:state.categoryListReducer, // Burada da state olarak vermek zorundayız.
    } 
}
// Burada obje olarak döndürdüğümüz currentCategory bizim component'imizin proplarına ekleniyor.

function mapDispatchToProps(dispatch){
  return { // Buradaki return CategoryList'in props'larına ekleme yapıyor.
    actions:{ // === this.props.actions
      getCategories:bindActionCreators(categoryActions.getCategories,dispatch), // this.props.actions.getCategories
      changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch), // this.props.actions.changeCategory
      getProducts:bindActionCreators(productActions.getProducts,dispatch), // this.props.actions.getProducts
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList) // connect de bir fonksiyon, ilgili component'i return ediyor.