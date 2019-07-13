import React from "react"
import MaskedInput from "react-text-mask"

const Input = props => {
  const {
    label,
    name,
    textarea,
    errorMessage,
    hasError,
    mask,
    dashed,
    ...otherProps
  } = props
  return (
    <div
      className={`m-bottom-40 input-wrapper w-100 ${dashed ? "dashed" : ""}`}
    >
      {label && (
        <label
          htmlFor={name}
          className="label tt-uppercase fs-custom fw-bold fs-8 m-bottom-5 d-block"
        >
          {label}
        </label>
      )}
      {textarea && <textarea {...otherProps} name={name} id={name} />}

      {!textarea && !mask && (
        <input className="fs-custom" {...otherProps} name={name} id={name} />
      )}

      {!textarea && mask && (
        <MaskedInput
          {...otherProps}
          guide={false}
          name={name}
          id={name}
          mask={mask}
        />
      )}

      {hasError && (
        <p className="color-danger fs-7 tt-uppercase m-top-5 input-wrapper-error">
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export default Input
