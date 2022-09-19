import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SendMail from "./components/SendMail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MailPage from "./Pages/MailPage";
import EmailListPage from "./Pages/EmailListPage";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser, login } from "./features/userSlice";
import LoginPage from "./Pages/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Wrapper>
      {!user ? (
        <LoginPage />
      ) : (
        <div>
          <BrowserRouter>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<EmailListPage />}></Route>
                <Route path="/mail" element={<MailPage />}></Route>
              </Routes>
            </AppBody>
          </BrowserRouter>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
`;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
