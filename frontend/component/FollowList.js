import React from "react";
import { Card, List } from "antd";
import { StopOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
const FollowList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={
        <div style={{ textAlign: "center", margin: "10px 0" }}>{header}</div>
      }
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};
FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
export default FollowList;
