import styled from "styled-components";

export const StyledModalContent = styled.div`
  padding: ${(props) => props.padding};
  border-radius: 0.4rem;
  width: ${(props) => props.width};
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  max-height: ${(props) => props.MinHeight};
`;

export const StyledModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9000;
  transition: linear 0.3s;
`;

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.assign === "assign" ? "#1b59f8" : "#ffff"};
  color: ${(props) => (props.assign === "assign" ? "#fff" : "rgba(0,0,0,0.7)")};
  margin-left: 3rem;
  padding: 0.55rem 1.6rem;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  font-size: 0.8rem;
  font-weight: 500;
  transition: linear 0.2s;
  &:hover {
    background-color: ${(props) =>
      props.assign !== "assign" ? "#1b59f8" : "#1b59f8"};
    color: ${(props) => (props.assign !== "assign" ? "#fff" : "#fff")};
  }
`;

export const StyledButtonService = styled.button`
  background-color: ${(props) => (props.new === "new" ? "#dfdfdf" : "#e8eefe")};
  border: none;
  color: ${(props) => (props.new === "new" ? "#000" : "#1b59f8")};
  outline: none;
  font-size: 0.74rem;
  padding: 0.6rem 1.2rem;
  border-radius: 0.35rem;
  font-weight: 600;
  margin-left: 1.5rem;
`;

export const StyledSubmit = styled.button`
  background-color: ${(props) => (props.done === "done" ? "#1b59f8" : "#fff")};
  border: 2px solid #1b59f8;
  color: ${(props) => (props.done === "done" ? "#fff" : "#1b59f8")};
  outline: none;
  font-size: 1.05rem;
  padding: ${(props) => props.padding};
  width: 100%;
  border-radius: 0.35rem;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  border: 1px solid #a19f9f;
  padding: ${(props) => props.padding};
  width: 100%;
  color: #ccc;
  font-size: 1rem;
  outline: none;
  border-radius: 0.4rem;
`;

export const StyledPignation = styled.button`
  background-color: transparent;
  border: ${(props) =>
    props.pig === "pig" ? "1px solid #ccc" : "1px solid #1b59f8"};
  color: ${(props) => (props.pig === "pig" ? "#ccc" : "#1b59f8")};
  outline: none;
  font-size: 0.9rem;
  width: 100%;
  padding: 0.2rem 0.7rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
`;
