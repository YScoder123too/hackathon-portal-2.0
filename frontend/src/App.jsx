import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";
import { loadUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;