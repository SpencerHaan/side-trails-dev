import * as React from "react"

interface ButtonProperties {
  disabled?: boolean
  label: string
  onClick?: React.MouseEventHandler
}

const Button = ({disabled, label, onClick}: ButtonProperties) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="w-28 p-2 rounded-full text-sm bg-zinc-300
        disabled:text-zinc-400
        enabled:hover:font-extrabold enabled:hover:bg-lion
        transition ease-in-out duration-75"
    >
      {label}
    </button>
  )
}

export default Button