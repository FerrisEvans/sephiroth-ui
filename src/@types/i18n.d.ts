export type I18nKey = 'zh-CN' | 'en-US'

export interface I18nVal {
  [key: string]: string
}

export type I18n = {
  [key in I18nkey]?: I18nVal
}

type Lang = {
  label: string,
  value: I18nKey
}[]

export const lang: Lang = [
  {
    label: '简体中文',
    value: 'zh-CN'
  },
  {
    label: 'English',
    value: 'en-US'
  }
]