import React from "react";
 
export const List = ({ children }) => (
    <ul >
    {children}
  </ul>
);

export function ListItem({ children }) {
     return <li>{children}</li>;
}
