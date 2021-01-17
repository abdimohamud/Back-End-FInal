
import React from 'react';
import { Space, Spin } from 'antd';

function Loading() {
  return (
    <Space size="middle" data-testid="loading">
      <Spin size="large" />
    </Space>
  );
}

export default Loading;