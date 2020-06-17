import React, { useState } from "react";
import TodoContent from "../Todo";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">Todo</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key={1} icon={<UserOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key={2} icon={<SettingOutlined />}>
            Manage Account
          </Menu.Item>
          <Menu.Item key={3} icon={<UploadOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "85vh",
          }}
        >
          {/* todo component mounted here */}
          <TodoContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
