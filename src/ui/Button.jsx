/* eslint-disable react/prop-types */
const Button = ({ filled, text }) => {
  const btn = `rounded-lg border-2 border-[#0076ce] !w-[100px] px-3.5 py-1.5 ${
    filled
      ? "text-white bg-[#0076ce] "
      : "text-[#0076ce] "
  }`;

  return <button className={btn}>{text}</button>;
};

export default Button;
