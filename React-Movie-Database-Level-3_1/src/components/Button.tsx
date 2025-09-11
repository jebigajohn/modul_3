interface ButtonProps {
  onClick: () => void
  buttonName: string
}

export default function Buttons({ onClick, buttonName }: ButtonProps) {
  return (
    <>
      <button
        className="border p-3 cursor-pointer rounded-[1.5rem] hover:bg-[var(--bg-hover-buttons)] hover:text-black"
        onClick={onClick}
      >
        {buttonName}
      </button>
    </>
  )
}
