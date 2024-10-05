import { Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import SignIn from "./pages/auth/SignIn";
import SIgnUp from "./pages/auth/SIgnUp";
import Maintenance from "./pages/maintenance/Maintenance";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Profile from "./pages/profile/Profile";
import ChangePassword from "./pages/profile/ChangePassword";
import BrandList from "./pages/master/brand/BrandList";
import RatioList from "./pages/attribute/ratio/RatioList";
import StyleList from "./pages/master/style/StyleList";
import FactoryList from "./pages/master/factory/FactoryList";
import WidthList from "./pages/master/width/WidthList";
import HalfRatioList from "./pages/attribute/halfRatio/HalfRatioList";
import AddBrand from "./pages/master/brand/AddBrand";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddStyle from "./pages/master/style/AddStyle";
import AddFactory from "./pages/master/factory/AddFactory";
import AddWidth from "./pages/master/width/AddWidth";
import AddHalfRatio from "./pages/attribute/halfRatio/AddHalfRatio";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SIgnUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/brand" element={<BrandList />} />
        <Route path="/add-brand" element={<AddBrand />} />
        <Route path="/style" element={<StyleList />} />
        <Route path="/add-style" element={<AddStyle />} />
        <Route path="/factory" element={<FactoryList />} />
        <Route path="/add-factory" element={<AddFactory />} />
        <Route path="/width" element={<WidthList />} />
        <Route path="/add-width" element={<AddWidth />} />
        <Route path="/ratio" element={<RatioList />} />
        <Route path="/half-ratio" element={<HalfRatioList />} />
        <Route path="/add-halfratio" element={<AddHalfRatio />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          path="/change-password"
          element={<ProtectedRoute element={<ChangePassword />} />}
        />

        {/* <Route
          path="*"
          element={<ProtectedRoute element={<Navigate to="/" />} />}
        /> */}
      </Routes>
    </>
  );
};

export default App;