import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="container  flex flex-col justify-end min-h-screen -mt-[4.5rem] relative">
      <div className="card h-[90%] rounded-t-[20px] w-full md:h-[70%] absolute px-5 md:px-14 py-6 md:py-12 overflow-y-auto left-0 bottom-0">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
