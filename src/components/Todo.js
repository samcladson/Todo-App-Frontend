import React, { useState, useEffect } from "react";
import { Card, Row, Col, Skeleton } from "antd";
import { SettingOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";

const { Meta } = Card;

const Todo = () => {
  const [Todo, setTodo] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:8080/allTodo").then((res) => {
        setTodo(res.data);
        setLoading(false);
      });
    }, 3000);
  }, []);

  return (
    <Row gutter={[24, 24]}>
      {Todo.length === 0
        ? [...Array(4)].map((x, i) => (
            <Col key={i} xs={24} sm={12} md={6}>
              <Skeleton loading={Loading} avatar active />
            </Col>
          ))
        : Todo.map((todo, i) => <Elements key={i} todoDetails={todo} />)}
    </Row>
  );
};

const Elements = ({ todoDetails }) => {
  const { title, description, tag } = todoDetails;
  return (
    <Col xs={24} sm={12} md={6}>
      <Card
        className="Shadow"
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
        ]}
      >
        <Meta
          title={<h4>{title}</h4>}
          description={
            <p>
              {description} <br />
              Tag : {tag}
            </p>
          }
        />
      </Card>
    </Col>
  );
};

export default Todo;
