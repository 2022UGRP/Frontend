import { TextField } from "@mui/material";

const EssayQuestion = (props) => {
  return(
    <>
        <TextField
          color='warning'
          required
          multiline
          fullWidth
          rows={4}
          id={props.pid}
          name={props.pname}
          label="상세설명을 입력하세요"
          variant="filled"
          onChange={props.changeEssayHandler}
        />
    </>
  )
  
}

export default EssayQuestion;