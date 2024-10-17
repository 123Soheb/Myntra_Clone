import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItem = useSelector((state) => state.bag);
  const Items = useSelector((state) => state.items);
  const FinaalItem = Items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {FinaalItem.map((item) => (
              <BagItem item={item}></BagItem>
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
