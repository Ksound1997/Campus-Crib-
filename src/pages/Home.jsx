import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import QuizContext from "../QuizContext";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Features from "./Features";
import Workings from "../components/Workings";
import Workwithus from "../components/Workwithus";
import Footer from "../components/Footer";
import Stuff from "../components/Stuff";
import ContactUs from "../components/ContactUs";
import Dashboard from "./Dashboard";
// import QuizContext from "../QuizContext"

const Home = () => {
  const { User } = useContext(QuizContext);

  const navigate = useNavigate();

  console.log(User);

  if (User) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Stuff />
      <Workings />
      <Workwithus />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
