import axios from "axios";

export default {
    getBooks: function(q, searchType) {
         console.log("API getBooks q: ", q, "  searchType: ", searchType);
            return axios.get("http://localhost:3001/api/googleBooks", { params: { q: searchType + ":" + q } });
             
    },
    saveBook: function(bookInfo) {
        console.log("API saveBook bookInfo: ", bookInfo);
        return axios.post("/api/books", bookInfo);
      },
    getSavedBooks: function() {
        return axios.get("/api/books");
      },
 
    
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
      }
};