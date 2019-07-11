import React from "react"

const mountClassNames = props => {
  const { disabled } = props
  const { className = "", type, small, ...otherProps } = props

  let btnClassName = `btn fs-custom tt-uppercase p-relative ${className}`

  type && (btnClassName = `btn-${type} ${btnClassName}`)
  small && (btnClassName = `btn-small ${btnClassName}`)
  disabled && (btnClassName = `btn-disabled ${btnClassName}`)

  return { className: btnClassName, otherProps }
}

const Button = props => {
  const { className, otherProps } = mountClassNames(props)
  const {
    children,
    disabled,
    loading,
    block,
    alignCenter,
    ...spreadProps
  } = otherProps
  const { icon, iconClass, ...allProps } = spreadProps

  return (
    <button {...allProps} disabled={disabled || loading} className={className}>
      <div
        className={`fs-custom color-white ${block ? "" : "d-flex"} ${
          alignCenter ? "d-flex-space-center" : "d-flex-space-between"
        }  `}
      >
        {children}
        {!loading && icon && <i className={`m-left-10 fas fa-${icon}`} />}
        {!loading && iconClass && (
          <i
            style={{ right: "15px" }}
            className={`m-left-10 icon ${iconClass} ${
              alignCenter ? "p-absolute" : ""
            }`}
          />
        )}
        {!!loading && <i className="m-left-10 fas fa-sync rotate" />}
      </div>
    </button>
  )
}

export default Button
