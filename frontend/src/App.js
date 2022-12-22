import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewCategory from "./components/Categories/AddNewCategory";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navigation/Navbar";
import Login from "./components/Users/Login/Login";
import Register from "./components/Users/Register/Register";
import CategoryList from "./components/Categories/CategoryList";
import UpdateCategory from "./components/Categories/UpdateCategory";
import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";
import AdminRoute from "./components/Navigation/ProtectedRoutes/AdminRoute";
import CreatePost from "./components/Posts/CreatePost";
import PostsList from "./components/Posts/PostsList";
import PostDetails from "./components/Posts/PostDetails";
import UpdatePost from "./components/Posts/UpdatePost";
import UpdateComment from "./components/Comments/UpdateComment";
import Profile from "./components/Users/Profile/Profile";
import UploadProfilePhoto from "./components/Users/Profile/UploadProfilePhoto";
import UpdateProfileForm from "./components/Users/Profile/UpdateProfileForm";
import SendEmail from "./components/Users/Emailing/SendEmail";
import AccountVerified from "./components/Users/AccountVerification/AccountVerified";
import UsersList from "./components/Users/UsersList/UsersList";
import UpdatePassword from "./components/Users/PasswordManagement/UpdatePassword";
import ResetPasswordForm from "./components/Users/PasswordManagement/ResetPasswordForm";
import ResetPassword from "./components/Users/PasswordManagement/ResetPassword";
  
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <AdminRoute
          exact
          path="/"
          element={<UpdateCategory/>}
        />
        <Route
          exact
          path="/"
          element={<ResetPasswordForm/>}
        />
        <Route exact path="/reset-password/:token/*" element={<ResetPassword/>} />
        <AdminRoute exact path="/" element={<UsersList/>} />
        <PrivateProtectRoute
          exact
          path="/"
          element={<UploadProfilePhoto/>}
        />

        <PrivateProtectRoute
          exact
          path="/"
          element={<UpdatePassword/>}
        />

        <PrivateProtectRoute
          exact
          path="/"
          element={<AccountVerified/>}
        />
        <PrivateProtectRoute exact path="/" element={<SendEmail/>} />
        <PrivateProtectRoute
          exact
          path="/"
          element={<UpdateProfileForm/>}
        />
        <PrivateProtectRoute
          exact
          path="/"
          element={<UpdatePost/>}
        />
        <PrivateProtectRoute exact path="/" element={<Profile/>} />
        <PrivateProtectRoute exact path="/" element={<CreatePost/>} />
        <PrivateProtectRoute
          exact
          path="/"
          element={<UpdateComment/>}
        />
        <AdminRoute exact path="/" element={<AddNewCategory/>} />
        <Route exact path="/" element={<PostsList/>} />
        <Route exact path="/" element={<PostDetails/>} />
        <AdminRoute exact path="/" element={<CategoryList/>} />
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/" element={<Register/>} />
        <Route exact path="/" element={<Login/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
