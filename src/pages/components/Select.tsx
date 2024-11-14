import React, {useEffect} from 'react';

interface SelectProps{
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
}

function Select({options, value, onChange, placeholder}: SelectProps){
  return(
    <select
      style={{ padding: '10px 20px 10px 10px', appearance: 'none', background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>') no-repeat right 10px center / 13px auto` }}
      className='form-control'
      value={value}
      onChange={(e => onChange(e))}
      placeholder={placeholder}>
      {placeholder && <option selected>{placeholder}</option>}
      {options.map((option, idx) =>  <option key={idx} value={option}>{option}</option>)}
    </select>
  )
}

export default Select;