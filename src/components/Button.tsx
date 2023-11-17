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
      // className="w-36 3xl:w-48 transition ease-in-out p-3 3xl:p-4 bg-zinc-300 disabled:text-zinc-400 enabled:hover:bg-lion enabled:hover:font-extrabold rounded-full text-base 3xl:text-lg"
      className="
        w-28 p-2 rounded-full 
        text-sm
        bg-zinc-300
        disabled:text-zinc-400
        enabled:hover:font-extrabold enabled:hover:bg-lion
        transition ease-in-out duration-75
      "
    >
      {label}
    </button>
  )
}

export default Button