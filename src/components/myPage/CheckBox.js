import React, {useState, useEffect} from "react";

const CheckBox = (props) => {
  const [bChecked, setChecked] = useState(false);
  const checkHandler = (e) => {
    props.checkedItemHandler(props.item);
  };

  useEffect(() => setChecked(props.isChecked[props.item]), [props.isChecked, props.item]);
  
  return (
    <>
      <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} /> {props.item}
    </>
  );
}

export default CheckBox;