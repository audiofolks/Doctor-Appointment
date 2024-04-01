import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import FindDoc from "./pages/FindDoc";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RootLayout from "./layouts/RootLayout/RootLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
);

export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/find-doc" element={<FindDoc />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
