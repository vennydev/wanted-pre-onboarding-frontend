import { useState } from 'react'

function SignUp() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isDisabled, setIsDisabled] = useState(true);

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
      }else{
      setIsDisabled(true)
      alert("비밀번호는 8자 이상이어야 합니다.")
      }
    }else{
      setIsDisabled(true)
      alert("이메일에 @를 포함하여주세요.")
    }
  };

  const setButtonEnabled = () => {
    return email && password
      ? setIsDisabled(false)
      : setIsDisabled(true)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="signUpForm">
        <input 
          data-testid="email-input"
          type="text"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          className="input-email"
          onKeyDown={setButtonEnabled}
          value={email}
          onChange={getSignUpEmail}
           />
        <input
          data-testid="password-input"
          type="text"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          className="input-pw"
          onKeyDown={setButtonEnabled}
          value={password}
          onChange={setSignUpPassword}
        />
        <button 
          data-testid="signup-button"
          disabled={isDisabled}
          >회원가입</button>
      </form>
    </div>
  )
}

export default SignUp