import React from "react";
import { ListItem } from "../List";
  
 

function Book({ title, subtitle, authors, link, description, image, keyISBN, SaveButton, PubDate  }) {
  //console.log({title});
  return (
    <ListItem>
        <h3  >{title}</h3>
        <p>{subtitle}</p>
        <p>
        <span>  {keyISBN} </span>
        <span> - </span>
        <span> {authors}</span>
        <span> - </span>
        <span><PubDate></PubDate></span>
        </p>
        <br></br>
        <img   src={image} alt={title} />
        <SaveButton />
        <p>{description}</p>
        <div  >
            <a target="_blank" rel="noopener noreferrer" href={link}>
              Read more
            </a>
        </div>
        <hr></hr>
    </ListItem>
  );
}

export default Book;
