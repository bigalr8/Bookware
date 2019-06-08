import React from "react";
import { ListItem } from "../List";
  
 

function Book({ title, subtitle, authors, link, description, image  }) {
  return (
    <ListItem>
        <h3  >{title}</h3>
         <h5>{subtitle}</h5>
        <div  >
            <a href={link}>
              View
            </a>
        </div>
        <p>Written by {authors}</p>
        <img   src={image} alt={title} />
        <p>{description}</p>
    </ListItem>
  );
}

export default Book;
