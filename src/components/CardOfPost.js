import * as React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";
import { Card } from "react-bootstrap"
import TagsList from "./TagsList";
import styled from "styled-components";

const Dates = styled.p`
  font-family: "Roboto";
  font-style: italic;
`
const Category = styled.p`
  font-family: "Roboto";
  font-weight: 500;
`
const CatLink = styled(Link)`
  font-family: "Roboto";
  font-style: italic;
`


const CardOfPost = ({ frontmatter, fields }) => {
  
  const tags = fields.tags
  
      return (
        <Card>
                <GatsbyImage
            image={getImage(frontmatter.featured_image)}
            alt={frontmatter.title}
            className="card-img-top"
            />
                <Card.Body>
                  <Card.Title>{frontmatter.title}</Card.Title>
                  <Dates>{frontmatter.travel_dates}</Dates>
                  <Category>Category: <CatLink to={`/category/${frontmatter.category}`}>{frontmatter.category}</CatLink></Category>
                  <Link to={fields.slug}>
                    Read <AiOutlineDoubleRight />
                  </Link>
                </Card.Body>
                <Card.Footer>                  
                  <TagsList tags={tags} />
                </Card.Footer>
              </Card>
    )
}

export default CardOfPost
