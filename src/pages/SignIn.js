import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, FormContainer, ButtonWrapper, Button, NavigateButton } from '../styles/LoginStyled';

function SignIn() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if(email.includes('@')){
      if(password.length + 1 >= 8){
          axios.post('https://www.pre-onboarding-selection-task.shop/auth/signin', {
            email: email,
            password: password,
          }).then(function(response){
            localStorage.setItem('myToken', response.data.access_token);
            navigate("/todo");
          }).catch(function(error){
            const sameEmailAlertMsg = "Unauthorized";
            if(error.response.data.message === sameEmailAlertMsg){
              alert("비밀번호를 확인해주세요");
              setIsDisabled(true);
            }
          })
      }else{
      setIsDisabled(true)
      alert("비밀번호는 8자 이상이어야 합니다.")
      }
    }else{
      setIsDisabled(true)
      alert("이메일에 @를 포함하여주세요.")
    }
  }

  useEffect(() => {
    email && password
      ? setIsDisabled(false)
      : setIsDisabled(true)
    
  }, [email, password]);

  return (
    <Container>
      <h2>Sign in</h2>
      <FormContainer onSubmit={login} id="signInForm">
        <div>
          <input 
            data-testid="email-input"
            type="text"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            className="input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            data-testid="password-input"
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            className="input-pw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <ButtonWrapper>
          <Button 
            data-testid="signin-button"
            disabled={isDisabled}
            className='login-button'
            >로그인</Button>
          <NavigateButton onClick={() => navigate("/signup")}>회원가입하기</NavigateButton>
        </ButtonWrapper>
      </FormContainer>
    </Container>
  )
}

export default SignIn