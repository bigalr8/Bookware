import axios from "axios";

export default {
    getBooks: function(q, {searchType}) {
         console.log("API getBooks q: ", q, "  searchType: ", {searchType});
            return axios.get("/api/googlebooks", { params: { q: {searchType} + ":" + q } });
             
    }
 
   
};