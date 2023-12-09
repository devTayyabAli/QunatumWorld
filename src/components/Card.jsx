const Card = ({ image, name, description, price }) => {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-xl"
      style={{
        backgroundColor: "rgb(40,40,40)",
        borderRadius: "20px"
      }}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="rounded"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl my-2 uppercase text-center fs-4">
          {name}
        </h1>
        <p className="tex text-center p-2"> 
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
