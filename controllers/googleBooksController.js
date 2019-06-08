const axios = require("axios");

//const db = require("../models");

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
       
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
