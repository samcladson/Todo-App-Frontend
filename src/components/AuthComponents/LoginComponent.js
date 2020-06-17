import React from "react";
import { Card } from "antd";
import { Form, Input, Button } from "antd";

const LoginComponent = ({ toggle }) => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div>
      <p className="mb-3">Login to continue</p>
      <Card style={{ width: "300px", textAlign: "center" }} hoverable>
        <h4 className="p-2">Login</h4>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="text" placeholder="username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
          <small onClick={toggle} className="text-danger">
            I donot have account
          </small>
        </Form>
      </Card>
    </div>
  );
};

export default LoginComponent;
