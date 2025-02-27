import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container shadow-lg rounded-lg p-4 bg-white transition-transform hover:scale-105">
      <img
        className="item-image rounded-md w-full h-48 object-cover mb-2"
        src={item.image}
        alt="item image"
      />
      <div className="rating text-sm text-gray-500 mb-1">
        {item.rating.stars} ⭐ | {item.rating.count} reviews
      </div>
      <div className="company-name text-lg font-semibold text-gray-700 mb-1">
        {item.company}
      </div>
      <div className="item-name text-md font-medium text-gray-600 mb-2">
        {item.item_name}
      </div>
      <div className="price text-sm font-medium text-gray-800 flex items-center mb-4">
        <span className="current-price text-lg font-bold text-green-600 mr-2">
          Rs {item.current_price}
        </span>
        <span className="original-price line-through text-gray-400 mr-2">
          Rs {item.original_price}
        </span>
        <span className="discount text-red-500">
          ({item.discount_percentage}% OFF)
        </span>
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger flex items-center gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md"
          onClick={handleRemove}
        >
          <AiFillDelete className="text-xl" /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success flex items-center gap-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md"
          onClick={handleAddToBag}
        >
          <GrAddCircle className="text-xl" /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
