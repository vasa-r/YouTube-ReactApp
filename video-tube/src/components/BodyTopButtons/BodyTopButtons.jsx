import styles from "../BodyTopButtons/BodyTopButtons.module.css";
import topBtnData from "../../utils/topBtnData.jsx";

const Buttons = ({ data }) => {
  const { name } = data;
  return (
    <div className={styles.btn}>
      <button className={styles.bton}>{name}</button>
    </div>
  );
};

const BodyTopButtons = () => {
  return (
    <div className={styles.btnContainer}>
      {topBtnData.map((btn) => {
        return <Buttons key={btn.id} data={btn} />;
      })}
    </div>
  );
};
export default BodyTopButtons;
