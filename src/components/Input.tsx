import Link from "next/link"
import {ReactNode} from 'react'

interface IInput {
  type: 'password' | 'text' | 'file' | 'search';
  placeholder: string;
  value: string;
  label: string;
  children?: ReactNode;
  onChange: (value: string) => void;
}

const Input = ({ type = 'text', placeholder = '', value, label, children, onChange }: IInput) => {
  return (
    <div className='form__Input flex flex-col gap-2'>
      {label ? <label className="form__label">{label}</label> : ''}
      <input
        className={children ? 'inputError input' : 'input'}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      {children}
    </div>
  );
}

export default Input