import React from "react"
import _get from "lodash/get"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PostItem = ({
  isLast,
  path,
  title,
  featured_media,
  acf: { data, onde },
}) => {
  const Image = _get(
    featured_media,
    "localFile.childImageSharp.resolutions.src",
    false
  )
  return (
    <div className={`sm-4-12 ${isLast ? "m-bottom-40" : ""}`}>
      <img src={Image} />
      <p className="fs-6 m-bottom-10 m-top-10 color-dark">{title}</p>
      <p className="m-bottom-5 color-dark">
        <span className=" tt-uppercas color-gray">Onde:</span> {onde}
      </p>
      <p className="m-bottom-15 color-dark">
        <span className=" tt-uppercas color-gray">Quando:</span> {data}
      </p>
      <Link to={path} className="btn w-100 d-block p-center m-top-20">
        Detalhes
      </Link>
    </div>
  )
}

PostItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featured_media: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    data: PropTypes.string.isRequired,
    onde: PropTypes.string.isRequired,
  }),
}

export default PostItem
