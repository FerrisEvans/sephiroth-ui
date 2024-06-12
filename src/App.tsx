import Routes from "@/routes";
import {memo, useEffect} from "react";
import {useRecoilValue} from "recoil";
import {antdMessageState, i18nLocaleState} from "@/stores/i18n.ts";
import {setHtmlLang} from "@/utils/i18n.ts";
import {ConfigProvider} from "antd";

export default memo(() => {
  const i18nLocale = useRecoilValue(i18nLocaleState)
  const antdMessage = useRecoilValue(antdMessageState)

  useEffect(() => {
    setHtmlLang(i18nLocale);
  }, [])

  return (
    <>
      <ConfigProvider locale={antdMessage}>
        <Routes />
      </ConfigProvider>
    </>
  )
})