import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsAction } from "../store/itemSlice";
import { FatchItemAction } from "../store/fetchStatus";
const FetchItem = () => {
  const fethfal = useSelector((store) => store.fetchStatus);
  console.log(fethfal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fethfal.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(FatchItemAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log("item", items);
        dispatch(FatchItemAction.markFetchDone());
        dispatch(FatchItemAction.markFetchingFinished());
        dispatch(itemsAction.addInitialItem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fethfal]);
  return <></>;
};
export default FetchItem;
