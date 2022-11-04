
import TextField from '@mui/material/TextField';

const TextareaField = (props) => {
    const { handleChange, label, name, value } = props;
    return (
      <div>
        <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
        <br></br>
        <TextField
          id="outlined-multiline-static"
          variant="standard"
          multiline
          rows={4}
          defaultValue="Default Value" onChange={handleChange} name={name}  value={value}></TextField>
      </div>
    )
  }
  
  export default TextareaField