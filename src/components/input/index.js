import React, { PropTypes } from 'react';

import './input.less';

const Message = ({ message, className }) => (
  <div className={className}>{message}</div>
);

const Input = ({ className, placeholder, id, name, ...props }) => {
  let cn = 'input';
  if (className) {
    cn += ` ${className}`;
  }
  if (props.error) {
    cn += ' input--error';
  }

  return (
    <div className={cn}>
      <input className="input__field" id={id} name={name} placeholder={placeholder} type="text" {...props}/>
      {props.error &&
        <Message className="input__message" message={props.error} type="error" />
      }
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  invalidClassName: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validClassName: PropTypes.string,
  value: PropTypes.string
};

export default Input;
