import TextField from '@mui/material/TextField';


const InputField = (props) => {
    const { handleChange, label, name, type, value } = props;
    return (
      <div className="mb-5">
        <label htmlFor={name}>{label}</label>
        <TextField id="standard-basic" variant="standard"  className="" type={type} onChange={handleChange} value={value} name={name} required />
      </div>
    )
  }
  
  export default InputField