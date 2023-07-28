import * as React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";
import { Card } from "react-bootstrap"
import TagsList from "./TagsList";




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
                  <p style={{ fontFamily: `Roboto`, fontStyle: `italic` }}>{frontmatter.travel_dates}</p>
                  <p style={{ fontFamily: `Roboto`, fontWeight: `500` }}>Category: <Link to={`/category/${frontmatter.category}`} style={{fontFamily: `Roboto`, fontStyle: `italic`}}>{frontmatter.category}</Link></p>
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
