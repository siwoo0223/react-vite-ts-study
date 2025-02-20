import { useState } from "react";
import { Layout, Menu, Button, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import headerMenu from "./headerMenu";
import Account from "./acount";

const { Header } = Layout;

interface AppHeaderProps {
  toggleSidebar: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const menuItems = headerMenu.map((menu) => {
    const item: any = {
      key: menu.text,
      label: menu.text,
      onClick: () => menu.path && navigate(menu.path),
    };

    // If the menu has subMenu, handle it as a SubMenu
    if (menu.subMenu) {
      item.children = menu.subMenu.map((subItem) => ({
        key: subItem.text,
        label: subItem.text,
        onClick: () => subItem.path && navigate(subItem.path),
      }));
    }

    return item;
  });

  return (
    <Header
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // This ensures left and right content are spaced evenly
        padding: "0 40px", // Add horizontal padding
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Left side: Menu icon */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={toggleSidebar}
        style={{ color: "white", fontSize: "20px" }}
      />

      {/* Center: Blog Title */}
      <Typography.Title
        level={4}
        style={{
          color: "white",
          margin: "0 20px",
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={() => navigate("/")}
      >
        My Blog
      </Typography.Title>

      {/* Centered Menu (Main Menu) */}
      <Menu
        mode="horizontal"
        items={menuItems}
        style={{
          backgroundColor: "black",
          flex: 1,
          display: "flex",
          justifyContent: "center", // Center the menu items
        }}
        theme="dark"
        overflowedIndicator={<div />} // Hide the ellipsis indicator
      />

      {/* Right side: Account */}
      <Account />
    </Header>
  );
};

export default AppHeader;
