import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/nav/Nav";
import { EmployeeList } from "./components/employee-list/EmployeeList";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/Header";
import Organization from "./components/organization/Organization";

function NotFound() {
  return <h2>Page Not Found</h2>;
}

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
