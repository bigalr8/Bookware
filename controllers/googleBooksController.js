const axios = require("axios");

const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    //console.log("findAll req: ", req);  
    //console.log("findAll res: ", res);
    //console.log("findAll err: ", err);
    const { query: params } = req;
    //console.log("findAll query: ", query, " params: ", params);
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results => 
        //console.log(results.data.items);
        results.data.items.filter(
          result =>
            result.volumeInfo.title  
        )
      )
      //find all books already saved in the database	
      //filter the results 
      //checking every book in already saved in the database
      //returning only results with ID not equal to that of a book already saved in the database    
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      ) 
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
