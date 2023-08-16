import { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, FormContainer, ButtonWrapper, Button, NavigateButton } from '../styles/LoginStyled';


function SignUp() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const getSignUpEmail = (e) => {
    setEmail(e.target.value);
  };

  const setSignUpPassword = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.includes('@')){
      if(password.length + 1 >= 8){
        // 로그인 성공 후 로그인 페이지로 이동
          axios.post('https://www.pre-onboarding-selection-task.shop/auth/signup', {
            email: email,
            password: password,
          }).then(function(response){
            navigate("/signin");
          }).catch(function(error){
            const sameEmailAlertMsg = '동일한 이메일이 이미 존재합니다.';
            if(error.response.data.message === sameEmailAlertMsg){
              alert(sameEmailAlertMsg);
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
  };

  useEffect(() => {
    email && password
      ? setIsDisabled(false)
      : setIsDisabled(true)
    
  }, [email, password]);

  return (
    <Container>
      <h2>Sign Up</h2>
      <FormContainer onSubmit={handleSubmit} id="signUpForm">
        <div>
          <input 
            data-testid="email-input"
            type="text"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            className="input-email"
            value={email}
            onChange={getSignUpEmail}
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
            onChange={setSignUpPassword}
          />
        </div>
        <ButtonWrapper>
          <Button 
            data-testid="signup-button"
            disabled={isDisabled}
            >회원가입</Button>
          <NavigateButton onClick={() => navigate("/signin")}>로그인하기</NavigateButton>
        </ButtonWrapper>
      </FormContainer>
    </Container>
  )
}

export default SignUp