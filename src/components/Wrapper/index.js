import React, { Component } from "react";
import Form from "../Form"; 
import API from "../../utils/API";
 

class Wrapper extends Component {
  state = {
    books: [],
    searchType: "",
    q: "",
    qi: "",
    message: "Search By ISBN or Title"
  };

  handleInputChange = event => {
    console.log("handleInputChange event: ", event,  " q: ", this.state.q);
    const { name, value } = event.target;
    console.log("handleInputChange name: ", name,  " type: ", typeof name, " value: ", value);

    this.setState({
      [name]: value
    });

    this.setState({
      searchType: (name === "qi") ? "ISBN" : "Title"  
    });
    
    console.log("handleInputChange searchType: ",this.state.searchType )
  };

  handleFormSubmit = event => {
    console.log("handleFormSubmit event: ", event, event.target, "searchType: ",this.state.searchType);
    event.preventDefault();
    this.getBooks();
  };

  getBooks = () => {
    API.getBooks(this.state.q,this.state.searchType)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No Results Found"
        })
      );
  };

  render() {
    return (
            <div>
              <h1 className="text-center">
                <strong>Bookware</strong>
              </h1>

              <h2 className="text-center">Lookup and Record Books in Your Collection</h2>
                       
              <Form 
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.qi}
                searchType = {"ISBN"}
                name = {"qi"}
                value = {this.state.qi}
              />
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
                searchType = {"Title"}
                name = {"q"}
                value = {this.state.q}
              />
              
                <div title="Results">
                {this.state.books}
                </div> 
            </div>
            ) 
    };
};

export default Wrapper;
