import axios from "axios";

export default {
    getBooks: function(q, searchType) {
         console.log("API getBooks q: ", q, "  searchType: ", searchType);
            return axios.get("http://localhost:3001/api/googleBooks", { params: { q: searchType + ":" + q } });
             
    }
 
   
};