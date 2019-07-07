import React from "react"
import _get from "lodash/get"
import { Link } from "gatsby"

const PostItem = ({
  node: { title, path, excerpt, content, featured_media },
}) => {
  const Image = _get(
    featured_media,
    "localFile.childImageSharp.resolutions",
    false
  )
  return (
    <div className="m-bottom-60">
      {Image && (
        <div
          className="image-preview m-bottom-20"
          style={{ backgroundImage: `url(${Image.src})` }}
        >
          <img
            className="d-none"
            src={Image.src}
            alt={`Imagem do post ${title}`}
          />
        </div>
      )}
      <Link to={path}>
        <h2 className="m-bottom-10 fs-5">{title}</h2>
      </Link>
      <div
        className="fs-6 color-gray m-bottom-20 lh-26 max-h-200 overflow-hidden opacity-effect p-relative"
        dangerouslySetInnerHTML={{
          __html: excerpt || content,
        }}
      />
      <Link style={{ color: "blue" }} to={path}>
        Ler Mais
      </Link>
    </div>
  )
}

export default PostItem
