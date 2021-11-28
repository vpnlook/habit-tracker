import React from "react";
import "./AddActivity.scss";

const AddActivity = () => {
  return (
    <>
      <h2 className="add-activity__title">
        Congrats on another step closer to your goal!!!
      </h2>
      <form className="form">
        <label for="count">How many *UOMs* did you complete?</label>
        <input
          className="form-field"
          type="number"
          id="count"
          name="count"
          min="1"
        />
      </form>
    </>
      /*
import close from "../../assets/icons/remove.svg";
import "./AddActivity.scss";

const AddActivity = ({ unitOfMeasure, setAddOpen }) => {
  return (
    <div className="add-activity">
      <img
        className="add-activity__close"
        src={close}
        alt="close"
        onClick={() => {
          setAddOpen(false);
        }}
      />
      <h1>Log Activity</h1>
      <form className="form">
        <label className="form__label" htmlFor="activity">
How many *UOMs* did you complete?        </label>
        <input name="form__input" type="number" required />
        <button className="form__btn">submit</button>
        <button className="form__btn--reset">reset</button>
      </form>
    </div>
>>>>>>> dev

  */
  );
};

export default AddActivity;
