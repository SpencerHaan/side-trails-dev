import * as React from "react"

interface ButtonProperties {
  label: string
  onClick?: React.MouseEventHandler
}

const Button = ({label, onClick}: ButtonProperties) => {
  return (
    <button
      onClick={onClick}
      className="w-36 3xl:w-48 transition ease-in-out p-3 3xl:p-4 bg-zinc-300 hover:bg-lion hover:font-extrabold rounded-full text-base 3xl:text-lg"
    >
      {label}
    </button>
  )
}

export default Button