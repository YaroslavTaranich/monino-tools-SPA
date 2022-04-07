import './inputWithLabel.css'

function InputWithLabel ({name, value, onChange, label}) {

    return (                 
      <div className='form-group'>
  
        <input 
          id={name} 
          type="text" 
          name={name}
          className='form-input'
          placeholder={label}
          value={value}
          onChange={onChange}
          required
          />
        <label 
          htmlFor={name} 
          className='form-label'>
            {label}:
        </label>
  
      </div> 
    );
  }

export default InputWithLabel;