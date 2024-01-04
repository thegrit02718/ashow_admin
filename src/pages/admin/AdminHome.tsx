import React from "react";
import * as Admin from "../../style/main/Home.styled";
import Layout from "../../component/Layout";

export type toggleProps = {
  item: string;
  event: React.MouseEvent<HTMLDivElement>;
};
function AdminHome() {
  return (
    <Layout>
      <Admin.Content></Admin.Content>
    </Layout>
  );
}

export default AdminHome;
