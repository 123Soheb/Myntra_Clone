import { useDispatch, useSelector } from "react-redux";
import { BagAction } from "../store/BagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bigItem = useSelector((store) => store.bag);
  const elementFound = bigItem.indexOf(item.id) >= 0;
  console.log(item.id, elementFound);
  const handleAddToBag = () => {
    dispatch(BagAction.AddToBag(item.id));
  };
  const handleRemoveBag = () => {
    dispatch(BagAction.remveFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="btn btn-danger btn-add-bag"
            onClick={handleRemoveBag}
          >
            <MdDelete />
            Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success btn-add-bag"
            onClick={handleAddToBag}
          >
            <IoIosAddCircle />
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};
export default HomeItem;
