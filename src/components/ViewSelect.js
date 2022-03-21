const ViewSelect = ({ color, text, onClick }) => {
    return (
      <button
        className="ViewSelect"
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    )
  }

  export default ViewSelect;