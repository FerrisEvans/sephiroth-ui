import {memo} from "react"
import {BrowserRouter} from "react-router-dom"
import { theme } from './theme/antd/theme'
import './theme/index.css'
import {ConfigProvider} from "antd";
import {StyleProvider} from "@ant-design/cssinjs";
import Router from "@/routes";

export default memo(() => {

  return (
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <StyleProvider hashPriority={"high"}>
          <div className={"h-full w-full"}>
            <Router />
          </div>
        </StyleProvider>
      </ConfigProvider>
    </BrowserRouter>
  )
})