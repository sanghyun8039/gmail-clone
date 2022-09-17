import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SendMail from "./components/SendMail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MailPage from "./Pages/MailPage";
import EmailListPage from "./Pages/EmailListPage";
function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<MailPage />}></Route>
            <Route path="/" element={<EmailListPage />}></Route>
          </Routes>
        </AppBody>
      </BrowserRouter>
      <SendMail />
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
