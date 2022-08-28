import { TextField } from "@mui/material";

const EssayQuestion = (props) => {
  return(
    <>
      <div style={{border: '1px solid', marginLeft: '5vw', marginRight: '5vw'}}>
        <p>
        {props.question}
        </p>
        <TextField
          required
          multiline
          fullWidth
          rows={4}
          id={props.pid}
          name={props.pname}
          label="Required"
          variant="filled"
          onChange={props.changeEssayHandler}
        />
      </div>
      <div style={{height: '10px'}}></div>
    </>
  )
  
}

export default EssayQuestion;
