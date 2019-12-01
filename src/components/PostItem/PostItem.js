import React from "react"
import _get from "lodash/get"
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
      <p className="fs-6 m-bottom-10 m-top-10">{title}</p>
      <p>
        <span className=" tt-uppercas color-gray">Onde:</span> {onde}
      </p>
      <p>
        <span className=" tt-uppercas color-gray">Quando:</span> {data}
      </p>
      <Link to={path} className="btn w-100 d-block p-center m-top-20">
        Detalhes
      </Link>
    </div>
  )
}

export default PostItem
