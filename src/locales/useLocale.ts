import {LocaleEnum} from "@/types/enum.ts"
import type {Locale as AntdLocal} from 'antd/es/locale'
import en_US from 'antd/locale/en_US'
import zh_CN from 'antd/locale/zh_CN'
import {useTranslation} from "react-i18next"

type Locale = keyof typeof LocaleEnum

type Language = {
  locale: keyof typeof LocaleEnum
  icon: string;
  label: string;
  antdLocal: AntdLocal
}

export const LANGUAGE_MAP: Record<Locale, Language> = {
  [LocaleEnum.zh_CN]: {
    locale: LocaleEnum.zh_CN,
    label: 'Chinese',
    icon: 'ic-locale_zh_CN',
    antdLocal: zh_CN,
  },
  [LocaleEnum.en_US]: {
    locale: LocaleEnum.en_US,
    label: 'English',
    icon: 'ic-locale_en_US',
    antdLocal: en_US,
  },
}

const useLocale = () => {
  const {i18n} = useTranslation()

  /**
   * localstorage -> i18nextLng change
   */
  const setLocale = (locale: Locale) => {
    i18n.changeLanguage(locale)
  };

  const locale = (i18n.resolvedLanguage || LocaleEnum.en_US) as Locale;

  const language = LANGUAGE_MAP[locale]

  return {
    locale,
    language,
    setLocale,
  }
}

export default useLocale