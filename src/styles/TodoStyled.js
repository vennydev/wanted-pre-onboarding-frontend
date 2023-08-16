import { styled } from "styled-components";

const TodoContainer = styled.div`
  max-width:500px;
  background:#FF6666;
  color:#FFF;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
  border-radius: 25px;
  width: 700px;
  padding: 30px;
`;

const CreateTodoContainer = styled.div`
  width: 100%;
  display: flex;

  input {
    width: 80%;
    background-color: #eee;
	  border: none;
	  padding: 12px 15px;
    height: 100%;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 20%;
    background:#FF6666;
    color:white;
    font-weight:bold;
    border:1px solid rgba(255,255,255,.3);
    cursor:pointer;
    transition:all .2s ease-out;

    &:hover{ 
      background:#FF5E5E;
    }
  }
`;

const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
`;

const TodoTitle = styled.li`
  margin-bottom: 5px;
  display: flex;

    &:last-child {
      margin-bottom: 0px;
    }

    span {
      font-weight:bold;
    }

    input {
      border: none;
      background-color: #eee;
      
      &:focus {
        outline: none;
      }
    }
`;

const TodoButtonWrapper = styled.div`
  display: flex;
  gap:4px;
  
  button {
    all:unset;
    border:1px solid rgba(255,255,255,.3);
    border-radius: 4px;
    padding: 0 4px;
    cursor: pointer;

    &:hover{ 
      background:#FF5E5E;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export { TodoContainer, CreateTodoContainer, TodoListContainer, TodoTitle, TodoButtonWrapper, ContentWrapper }

