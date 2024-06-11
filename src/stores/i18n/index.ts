import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'
import {I18nKey} from "@/@types/i18n"
import {getLocale} from "@/utils/i18n.ts"

const sysLocale = getLocale()

function i18nReducer(state: any, action: any) {
  switch (action.type) {}
  return state
}

export default i18nReducer

export const antdMsg: {[key in I18nKey]: any} = {
  'zh-CN': zhCN,
  'en-US': enUS,
}