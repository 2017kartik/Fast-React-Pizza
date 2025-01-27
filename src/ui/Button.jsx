import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
  const base =
    "bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-500 transition-colors duration-300 focus:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-6 md:py-3 text-xs",
    secondary:
      "border-2 border-stone-300 uppercase font-semibold text-stone-500 inline-block tracking-wide rounded-full hover:text-stone-800 hover:bg-stone-300 transition-colors duration-300 focus:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
