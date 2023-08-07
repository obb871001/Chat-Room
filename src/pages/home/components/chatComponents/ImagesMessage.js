const ImagesMessage = ({ path }) => {
  return (
    <img
      src={path}
      className="max-w-[500px] max-h-[500px] object-cover rounded-2xl"
    />
  );
};

export default ImagesMessage;
