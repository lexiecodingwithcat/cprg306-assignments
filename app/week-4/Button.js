function Button({ onClick, disabled, children }) {
  return (
    <button
      className="h-6 w-10 bg-blue-500 hover:bg-blue-700 rounded-md  disabled:bg-gray-500"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
