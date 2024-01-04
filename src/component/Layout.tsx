import * as Admin from "../style/main/Home.styled";
import Sidebar from "../component/Sidebar";
import { useToggle } from "../hooks/useToggle";
import { useCookies } from "react-cookie";
import AdminSidebar from "./AdminSidebar";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { state, toggle } = useToggle();
  const [cookies, setCookie, removeCookie] = useCookies(["admin"]);

  return (
    <Admin.Layout>
      <Admin.FlexBox>
        {cookies.admin === "administrator" ? <AdminSidebar /> : <Sidebar />}

        <Admin.Content>
          <Header />
          <Admin.ContentInner>{children}</Admin.ContentInner>
        </Admin.Content>
      </Admin.FlexBox>
    </Admin.Layout>
  );
}

export default Layout;
