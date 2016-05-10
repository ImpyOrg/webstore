import React, { PropTypes } from 'react';
import { form, from } from 'react-inform';

import Button from '../../components/button';
import Input from '../../components/input';

@form(from({
  firstname: {
    "First name is required": Boolean,
    "There are forbidden symbols here": Boolean
  },
  lastname: {
    "Last name is required": Boolean,
    "There are forbidden symbols here": Boolean
  },
  email: {
    "Email is required": Boolean,
    "Email is invalid": Boolean,
    "Email is already taken": Boolean
  },
  password: {
    "You must enter the password": Boolean,
    "Password must contain at least 8 symbols": Boolean
  }
}))
export default class SignupForm extends React.Component {
  static displayName = 'SignupForm';

  static propTypes = {
    fields: PropTypes.shape({
      firstname: PropTypes.shape({}),
      lastname: PropTypes.shape({}),
      email: PropTypes.shape({}),
      password: PropTypes.shape({})
    }),
    form: PropTypes.shape({}),
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    onSubmit: () => {}
  };

  clickHandler = () => {
    this.submit.load();
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { form, fields } = this.props;

    if (form.isValid()) {
      this.props.onSubmit({
        firstname: fields.firstname.value,
        lastname: fields.lastname.value,
        email: fields.email.value,
        password: fields.password.value
      });
    }

    this.submit.load(true);
  }

  render() {
    const { fields } = this.props;

    return (
      <form onSubmit={this.submitHandler}>

        <div className="layout__row">
          <Input className="" id="firstname" placeholder="Your name" type="text" {...fields.firstname} />
        </div>

        <div className="layout__row">
          <Input className="" id="lastname" placeholder="Your last name" type="text" {...fields.lastname} />
        </div>

        <div className="layout__row">
          <Input className="" id="email" placeholder="Email address" type="email" {...fields.email} />
        </div>

        <div className="layout__row">
          <Input className="" id="password" placeholder="Password" type="password" {...fields.password} />
        </div>

        <div className="layout__row">
          <Button.Submit
            ref={c => this.submit = c}
            onClick={this.clickHandler}
            onResponse={this.submitHandler}
          />
        </div>
      </form>
    );
  }
}
