// Button.js
export default function Button({ children, ...props }) {
    return (
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-blue-700 text-stone-100 hover:text-stone-50 hover:bg-blue-800"
        {...props} >
        {children}
      </button>
    );
  }
  