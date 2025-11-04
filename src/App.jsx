import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useState, useEffect } from "react"
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import { QuizProvider } from "./QuizContext";
import Overview from "./pages/Overview";
import Accomodation from "./pages/Accomodation";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import Dues from "./pages/Dues";
import Cart from "./pages/Cart";
import Community from "./pages/Community";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PaymentScreen from "./pages/PaymentScreen";
import DetailsScreen from "./pages/DetailsScreen";
import Bookings from "./components/Bookings";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Overview />} />
            {/* <Route path="accomodation" element={<Accomodation />} /> */}
             <Route path="accomodation">
              <Route index element={<Accomodation />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="details/:id" element={<DetailsScreen />} />
            </Route>
           

              <Route path="marketplace">
              <Route index element={<Marketplace />} />
              <Route path="product/:id" element={<ProductDetails />} />
            </Route>
            
            <Route path="dues">
              <Route index element={<Dues />} />
              <Route path="payment" element={<PaymentScreen />} />
            </Route>
            <Route path="orders" element={<Cart />} />
            <Route path="messages" element={<Messages />} />
            <Route path="community" element={<Community />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
