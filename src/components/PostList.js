import React from "react";
import { Col } from "react-bootstrap";
import CardSinglePost from "./cardsinglepost.js";

const PostList = ({ posts }) => {
  return posts.map(post => {
    return (
      <Col lg={4} xs={12} sm={6}>
        <CardSinglePost key={post.fields.slug} {...post} />
      </Col>
    )
  })
}

export default PostList