import React, { Component } from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import alertify from 'alertifyjs';

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
// Formda input'a name olarak ilgili state'in ismini eşleşecek şekilde atamalıyız.
  handleChange = (e) => {
    let targetName = e.target.name; // ilgili target'ın adını seçmek için. konsoldan bakabilirsin.
    let targetValue = e.target.value; // ilgili target'ın değerini seçmek için
    this.setState({ [targetName]: targetValue }); // state değeri değiştirirken değeri değişkenden alıyorsak [] şeklinde göndermek gerekiyor.
  };

  handleSubmit = (e) => {

alertify.success(this.state.email + " added to db");

    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" placeholder="Enter your e-mail" onChange={this.handleChange}></Input>
            </FormGroup>

            <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" placeholder="Enter your password" onChange={this.handleChange}></Input>
            </FormGroup>

            <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" placeholder="Enter your description" onChange={this.handleChange}></Input>
            </FormGroup>

            <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" placeholder="Select a city" onChange={this.handleChange}>
            <option>Ankara</option>
            <option>İstanbul</option>
            <option>İzmir</option>
            </Input>
            </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
