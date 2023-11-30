// eslint-disable-next-line react/prop-types
const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white my-3 p-3 text-center rounded-md">
      {children}
    </div>
  );
};

export default Error;
