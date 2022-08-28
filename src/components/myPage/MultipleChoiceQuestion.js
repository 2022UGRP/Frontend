import CheckBox from "./CheckBox";

const MultipleChoiceQuestion = (props) => {
  return (
    <>
      <div style={{border: '1px solid', marginLeft: '5vw', marginRight: '5vw'}}>
        <p>
        {props.question}
        </p>
        {Object.keys(props.items).map((key, index) => 
          <div key={key} style={{display: 'inline-block', verticalAlign: 'top'}}>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {index + 1}. {key}
            </div>
            {props.items[key].map((item, index) => 
              <div key={index}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <CheckBox checkedItemHandler={props.checkedItemHandler} isChecked={props.isChecked} item={item}/>
              </div>
            )}
          </div>
        )}
      </div>
      <div style={{height: '10px'}}></div>
    </>
  )
}

export default MultipleChoiceQuestion;