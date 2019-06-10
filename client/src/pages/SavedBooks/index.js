import React, { Component } from "react";
import Book from "../../components/Book";
import API from "../../utils/API";
import  List  from "../../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      //.catch(err => console.log(err));
      .catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(this.state.books, " ", error.config);  
      })
  };

   

  render() {
    return (
          <div>
              <h1 className="text-center">
                <strong>Bookware</strong>
              </h1>
              <h2 className="text-center">Lookup and Record Books in Your Collection</h2>

            <div>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      authors={book.authors.join(", ")}
                      link={book.link}
                      description={book.description}
                      image={book.thumbnail}
                      keyISBN={book.isbn}
                      PubDate={book.published}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                        >
                          Delete
                        </button> 
                      )}
                    />
                  ))}
                </List>

              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </div>
            </div>



    );
  }
}

export default Saved;
