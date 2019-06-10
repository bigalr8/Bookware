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
    //let searchTypeVal = (name === "qi") ? "ISBN" : "title" ;  
    //console.log ("searchTypeVal: ", searchTypeVal);
    this.setState({
      [name]: value, 
      //searchType: searchTypeVal 
    });
    //console.log("handleInputChange q: ", this.state.q, " qi: ", this.state.qi, " searchType: ",this.state.searchType);
  };

  handleFormSubmit = event => {
    const { name, value } = event.target;
    //console.log("handleFormSubmit event.target: ", event.target);
    //console.log("handleFormSubmit name: ", name, " value: ", value);
    this.setState({
      [name]: value 
    });
    //console.log("handleFormSubmit searchType: ",this.state.searchType);
    event.preventDefault();
    this.getBooks();
  };

  handleSaveBook = id => {
    const book = this.state.books.find(book => book.id === id);
    /*
    console.log("handleSaveBook: ", id);
    console.log(book.id);
    console.log("title: ",book.volumeInfo.title);
    console.log("subtitle: ",book.volumeInfo.subtitle);
    console.log("link ", book.volumeInfo.infoLink);
    console.log("authors: ",book.volumeInfo.authors);
    console.log("description: ", book.volumeInfo.description);
    console.log("image: ",book.volumeInfo.imageLinks.thumbnail);
    console.log("isbn: ",book.volumeInfo.industryIdentifiers.length >1 && book.volumeInfo.industryIdentifiers[1].type === "ISBN_13"?
                book.volumeInfo.industryIdentifiers[1].identifier:book.volumeInfo.industryIdentifiers[0].identifier);
    console.log("genre: ",book.volumeInfo.categories[0]);
    console.log("published: ", this.formatDate(book.volumeInfo.publishedDate));
    console.log("thumbnail: ", book.volumeInfo.imageLinks.thumbnail);
    console.log("price: ",book.saleInfo.saleability === "FOR_SALE"?book.saleInfo.listPrice.amount:"");
    console.log("availability: ", book.saleInfo.saleability);
    console.log("rating: ", book.volumeInfo.averageRating);
    */
   
    
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      isbn: book.volumeInfo.industryIdentifiers.length >1 && book.volumeInfo.industryIdentifiers[1].type === "ISBN_13"?
      book.volumeInfo.industryIdentifiers[1].identifier:book.volumeInfo.industryIdentifiers[0].identifier,
      genre: book.volumeInfo.categories[0],
      published: this.formatDate(book.volumeInfo.publishedDate), 
      thumbnail: book.volumeInfo.imageLinks.thumbnail, 
      price: book.saleInfo.saleability === "FOR_SALE"?book.saleInfo.listPrice.amount:"",
      availability: book.saleInfo.saleability,
      rating: book.volumeInfo.averageRating
      }).then(() => this.getBooks());
 
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
    //console.log("pubDate: ", pubDate)
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
                          authors={ book.volumeInfo.authors.length > 1?book.volumeInfo.authors.join(", "):book.volumeInfo.authors[0]}
                          description={book.volumeInfo.description.substring(0,355)+"..."}
                          image={book.volumeInfo.imageLinks.thumbnail}
                          keyISBN ={book.volumeInfo.industryIdentifiers.length > 1 && book.volumeInfo.industryIdentifiers[1].type === "ISBN_13"?
                          book.volumeInfo.industryIdentifiers[1].identifier:book.volumeInfo.industryIdentifiers[0].identifier}
                          PubDate={()=>this.formatDate(book.volumeInfo.publishedDate)} 
                          Button = { () => (
                            <button
                              onClick={() => this.handleSaveBook(book.id)}
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
