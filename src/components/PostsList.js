import React from "react";
import { Col } from "react-bootstrap";
import CardOfPost from './CardOfPost'


const PostsList = ({ posts }) => {
  return posts?.map(post => {
    return (
      <Col lg={4} xs={12} sm={6} key={post.id}>
        <CardOfPost key={post.fields.slug} {...post} />
      </Col>
    )
  })
}

export default PostsList