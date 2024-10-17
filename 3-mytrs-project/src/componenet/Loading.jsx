import style from "./Loading.module.css";
const LoadingSpinner = () => {
  return (
    <center>
      <div className={style.loader}></div>
    </center>
  );
};

export default LoadingSpinner;
