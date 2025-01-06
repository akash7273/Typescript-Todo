type Button = {
    className:string,
    title:string
    onclick?:()=>void
}

const Button = ({title,className,onclick}:Button) => {
  return (
    <button
      type="submit"
      className={className}
      onClick={onclick}
    >
      {title}
    </button>
  );
};

export default Button;
