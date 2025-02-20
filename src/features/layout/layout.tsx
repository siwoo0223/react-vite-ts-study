import { useState } from "react";
import { Layout } from "antd";
import AppHeader from "./header/header";
import Side from "./side/side";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function AppLayout() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader toggleSidebar={toggleSidebar} />
      <Layout>
        {/* 사이드바 */}
        <Side isSidebarVisible={collapsed} />

        {/* 콘텐츠 영역 */}
        <Layout style={{ flex: 1 }}>
          <Content style={{ margin: "20px", padding: "20px", background: "#fff" }}>
            {/* 실제 콘텐츠 */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
