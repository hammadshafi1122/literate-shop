import { AiFillStar } from "react-icons/ai";

const starsValues = [
  {
    id: 1,
    isRated: true,
  },
  {
    id: 2,
    isRated: true,
  },
  {
    id: 3,
    isRated: true,
  },
  {
    id: 4,
    isRated: true,
  },
  {
    id: 5,
    isRated: true,
  },
];

const StarRating = ({ value }) => {
  const stars = starsValues.map((item) => ({ ...item, isRated: value >= item.id }));

  return (
    <div className="flex items-center space-x-1">
      {stars.map((item) => (
        <AiFillStar
          key={item.id}
          fontSize={"1.5rem"}
          className={`${item.isRated ? "text-yellow-500" : "text-gray"}`}
        />
      ))}
    </div>
  );
};

export { StarRating };
