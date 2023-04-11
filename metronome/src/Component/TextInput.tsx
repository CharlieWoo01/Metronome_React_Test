import classNames from "classnames";
import React from "react";
import './TextInput.scss';

// npm install classnames 

type InputWidth = "large" | "medium" | "small";
interface TextInputProps {
  label: string;
  type?: "text" | "password" | "email" | "search" | "tel" | "url" | "number";
  name: string;
  id: string;
  value: string | number;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  width?: InputWidth;
  // Can add some events here e.g. onBlur, onChange, onFocus etc
}

export default function TextInput({
  label,
  type = "text",
  id,
  name,
  placeholder = "",
  disabled = false,
  className,
  width = "large",
  value,
  required,
}: // Any events see above
TextInputProps) {
  const classes = classNames("input-text", className, {
    "input-text-large": width === "large",
    "input-text-medium": width === "medium",
    "input-text-small": width === "small",
  });

  return (
    <div className="input-field">
      <label className="input-label" htmlFor={id}>
        {label}
        {required && <span className="required-field">*</span>}
      </label>
      <input
        required={required}
        type={type}
        id={id}
        name={name}
        className={classes}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={placeholder}
        value={value}
        width={width}
      />
    </div>
  );
}
