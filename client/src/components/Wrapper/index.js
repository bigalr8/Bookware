import React, { Component } from "react";
import Form from "../Form"; 
import Book from "../Book"; 
import { List } from "../List";
import API from "../../utils/API";
 

class Wrapper extends Component {
  state = {
    books: [],
    searchType: "",
    q: "",
    qi: "",
    message: "Search By ISBN or Title"
  };
 componentDidMount () {this.getBooks()};
  handleInputChange = event => {
    console.log("handleInputChange event.target: ", event.target);
    const { name, value } = event.target;
    
   // console.log("handleInputChange name: ", name, " value: ", value, " searchType: ",this.state.searchType);

    let searchTypeVal = (name === "qi") ? "ISBN" : "title" ;  
    console.log ("searchTypeVal: ", searchTypeVal);
    this.setState({
      [name]: value, 
      //searchType: searchTypeVal 
    });
    console.log("handleInputChange q: ", this.state.q, " qi: ", this.state.qi, " searchType: ",this.state.searchType);
     
      
  };

  handleFormSubmit = event => {
    const { name, value } = event.target;
    
    console.log("handleFormSubmit event.target: ", event.target);

    console.log("handleFormSubmit name: ", name, " value: ", value);
    this.setState({
      [name]: value 
      
    });
    console.log("handleFormSubmit searchType: ",this.state.searchType);

    event.preventDefault();
    this.getBooks();
  };

  getBooks = () => {
    console.log("getBooks searchType: ",this.state.searchType );

    let queryValue = (this.state.searchType === "ISBN") ? this.state.qi : this.state.q;
    console.log ("getBooks queryValue: ", queryValue);
    let searchTypeVal = this.state.searchType;
    API.getBooks(queryValue,searchTypeVal)
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

  formatDate = (pubDate) => {
    console.log("pubDate: ", pubDate)
    let d = new Date(pubDate+"T00:00:00"); 
    return d.toLocaleString('en-us', { month: 'long' }) + " " + d.getDate() + ", " + d.getFullYear();
    
  }

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
                searchType = {"title"}
                name = {"q"}
                value = {this.state.q}
              />
              <hr></hr>
              <div title="Results">
                {this.state.books.length? (
                    <List>
                      {this.state.books.map(book => (
                        <Book 
                          key ={book.volumeInfo.industryIdentifiers.length >1 && book.volumeInfo.industryIdentifiers[1].type === "ISBN_13"?
                          book.volumeInfo.industryIdentifiers[1].identifier:book.volumeInfo.industryIdentifiers[0].identifier}
                          title={book.volumeInfo.title}
                          subtitle={book.volumeInfo.subtitle}
                          link={book.volumeInfo.infoLink}
                          authors={book.volumeInfo.authors.join(", ")}
                          description={book.volumeInfo.description.substring(0,355)+"..."}
                          image={book.volumeInfo.imageLinks.thumbnail}
                          keyISBN ={book.volumeInfo.industryIdentifiers.length >1 && book.volumeInfo.industryIdentifiers[1].type === "ISBN_13"?
                          book.volumeInfo.industryIdentifiers[1].identifier:book.volumeInfo.industryIdentifiers[0].identifier}
                          PubDate={()=>this.formatDate(book.volumeInfo.publishedDate)} 
                          SaveButton = { () => (
                            <button
                              onClick={() => this.handleSaveBook(this.keyISBN)}
                            > 
                            Include
                            </button>
                          ) }
                          />
                      ))}
                    </List>
                )
                    :
                      (
                        <h2 className="text-center">{this.state.message}</h2>
                      )   
              }
              </div>    
            </div>
        )  
    }; 
};  

export default Wrapper;
