import { styled } from "styled-components";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
	width: 380px;
	min-height: 200px;
  padding: 30px 0px;
  border-radius: 25px;
  position: relative;

  h2 {
    font-size: 32px;
    letter-spacing: 8px;
    margin-bottom: 24px;
  }
`

const FormContainer = styled.form`
  input {
    background-color: #eee;
	  border: none;
	  padding: 12px 15px;
	  margin: 8px 0;
	  width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding:0px 5px;
  gap:10px;
  margin-top: 50px;
`

const Button = styled.button`
  border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  cursor: pointer;

  &:active {
	  transform: scale(0.95);
  }
`;

const NavigateButton = styled(Button)`
  background-color: transparent;
  border-color: #FF4B2B;
  color:#FF4B2B;
`


export { Container, FormContainer, ButtonWrapper, Button, NavigateButton };