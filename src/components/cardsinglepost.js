import * as React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";
import { Card } from "react-bootstrap"

const CardSinglePost = ({ frontmatter, fields }) => {
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
                  <p style={{ fontFamily: `Roboto`, fontWeight: `500` }}>Category: <span style={{fontFamily: `Roboto`, fontStyle: `italic`}}>{frontmatter.category}</span></p>
                  <Link to={fields.slug}>
                    Read <AiOutlineDoubleRight />
                  </Link>
                </Card.Body>
              </Card>
    )
}

export default CardSinglePost