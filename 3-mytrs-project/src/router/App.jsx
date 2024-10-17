import { Outlet } from "react-router-dom";
import Footer from "../componenet/Footer";
import Header from "../componenet/Header";
import FetchItem from "../componenet/FetchItem";

import { useSelector } from "react-redux";
import LoadingSpinner from "../componenet/Loading";

function App() {
  const fethfal = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItem />
      {fethfal.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
