import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function LoginPage() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Wrapper>
      <LoginContainer>
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Log In
        </Button>
      </LoginContainer>
    </Wrapper>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  background-color: #f2f2f2;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    object-fit: contain;
    height: 200px;
  }
`;
