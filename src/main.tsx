import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'virtual:svg-icons-register';

import './locales/i18n';
import App from './App.tsx';
import {StyleProvider} from "@ant-design/cssinjs";
import {ConfigProvider} from "antd";
import {theme} from "@/theme/antd/theme.ts";

// 创建一个 client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 失败重试次数
      retry: 3,
      // 缓存有效期 5m
      gcTime: 300_000,
      // 数据变得 "陈旧"（stale）的时间 10s
      staleTime: 10_1000,
      // 禁止窗口聚焦时重新获取数据
      refetchOnWindowFocus: false,
      // 禁止重新连接时重新获取数据
      refetchOnReconnect: false,
      // 禁止组件挂载时重新获取数据
      refetchOnMount: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 提供 client 至 App */}
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <ConfigProvider theme={theme}>
        <StyleProvider hashPriority="high">
          <App/>
        </StyleProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
