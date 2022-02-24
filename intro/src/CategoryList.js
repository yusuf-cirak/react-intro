import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
      categories: []
      //currentCategory:"", Değişkenlerimizi bu şekilde key:value şeklinde tanımlıyoruz. Çünkü state temelde JavaScript objesi 
    };
  
    componentDidMount() { // Component render edildikten yani render fonksiyonu çalıştıktan sonra çalışıyor. Life cycle'lardan biridir.
      this.getCategories();
    }

    getCategories=()=>{
      fetch("http://localhost:3000/categories")
      .then(response=>response.json())
      .then(data=>this.setState({categories: data}))
      .catch(err=>err.json())
    }
  render() {
    return (
      <div>
        <h3> This is CategoryList Component</h3>
        <h4>{this.props.info.title}</h4>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active={category.categoryName===this.props.currentCategory.categoryName?true:false}
            onClick={()=>{this.props.changeCategory(category)}} key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>

    );
    // onClick eventi olduğunda this ile 
  }
}

