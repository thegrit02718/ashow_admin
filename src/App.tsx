import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/login/Signin";
import Home from "./pages/main/Home";
import Buildings from "./pages/buildings/AptBuildings";
import { RecoilRoot } from "recoil";
import GlobalModal from "./component/modal/GlobalModal";
import AptEnrollment from "./pages/buildings/AptEnrollment";
import User from "./pages/admin/User";
import ReviewRequest from "./pages/admin/ReviewRequest";
import PrivateRoutes from "./component/Login/PrivateRoutes";
import AdminHome from "./pages/admin/AdminHome";
import PostList from "./pages/admin/PostList";
import PostEditor from "./pages/admin/PostEditor";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route element={<PrivateRoutes authentication={false} />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route element={<PrivateRoutes authentication={false} />}>
            <Route path="/buildings" element={<Buildings />} />
          </Route>
          <Route element={<PrivateRoutes authentication={false} />}>
            <Route path="/buildings/enroll" element={<AptEnrollment />} />
          </Route>

          <Route element={<PrivateRoutes authentication={true} />}>
            <Route path="/user" element={<User />} />
          </Route>
          <Route element={<PrivateRoutes authentication={true} />}>
            <Route path="/admin" element={<AdminHome />} />
          </Route>
          <Route element={<PrivateRoutes authentication={true} />}>
            <Route path="/request" element={<ReviewRequest />} />
          </Route>
          <Route element={<PrivateRoutes authentication={true} />}>
            <Route path="/post" element={<PostList />} />
          </Route>
          <Route element={<PrivateRoutes authentication={true} />}>
            <Route path="/post/new" element={<PostEditor />} />
          </Route>
        </Routes>
        <GlobalModal />
      </RecoilRoot>
    </div>
  );
}

export default App;
