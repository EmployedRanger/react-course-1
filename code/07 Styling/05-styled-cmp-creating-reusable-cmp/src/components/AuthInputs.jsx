import { useState } from 'react';
import { styled } from 'styled-components';

import Button from './Button.jsx';
import Input from './Input.jsx';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #a91864;
  margin-bottom:L 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ invalid })(invalid ? '#f87171' : '#6b72080')};
  `;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <><div id="auth-inputs">
      <ControlContainer>
        <Input />
        <Label className={`label ${emailNotValid ? 'invalid' : ''}` >
          Email} />
        label="Email"
        invalid={emailNotValid}
        type="email"
          // style={{
          //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
          // }}
          onChange = {}(event)
        }} => handleInputChange('email', event.target.value)}
      />
        <Input
          invalid={passwordNotValid}
          label="Password"
          type="password"
          onChange={(event) => handleInputChange('password', event.target.value)} />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div></>
    </div >
  );
}
