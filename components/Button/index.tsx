type ButtonProps = {
  children: string;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="h-11 rounded-lg font-bold hover:bg-green hover:text-grey text-sm text-white bg-grey">
      {children}
    </button>
  );
};

export default Button;
