import React from "react";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";



const TagsList = ({ tags }) => {
  return tags?.map(tag => {
    return (
        <Link to={`/tags/${tag}`}><Button variant="outline-dark" className="m-1">{ tag }</Button></Link>
      )
  })
}

export default TagsList