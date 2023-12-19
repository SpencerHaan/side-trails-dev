import * as React from "react"

interface ButtonProperties {
  form?: string
  disabled?: boolean
  label: string
  onClick?: React.MouseEventHandler
}

const Button = ({ form, disabled, label, onClick }: ButtonProperties) => {
  return (
    <button
      form={form}
      disabled={disabled}
      onClick={onClick}
      className="w-28 lg:w-32 xl:w-36 p-2 lg:p-3 rounded-full text-sm lg:text-base xl:text-lg bg-zinc-300
        disabled:text-zinc-400 disabled:bg-zinc-200
        enabled:hover:font-extrabold enabled:hover:bg-lion
        transition ease-in-out duration-75"
    >
      {label}
    </button>
  )
}

export default Button