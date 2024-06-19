import {QRCode} from "antd"
import {LoginState, useLoginStateContext} from "@/views/Login/useLogin.tsx"
import ReturnButton from "@/components/ReturnButton.tsx"
import {useTranslation} from "react-i18next";

const QrCodeForm = () => {
  const {loginState, backToLogin} = useLoginStateContext()
  if (loginState !== LoginState.QR_CODE) return null

  const {t} = useTranslation()
  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">{t('sys.login.qrSignInFormTitle')}</div>
      <div className="flex w-full flex-col items-center justify-center">
        <QRCode value="https://ant.design/" size={300}/>
        <p className="my-4 text-sm !text-[#00000073]">{t('sys.login.scanSign')}</p>
      </div>
      <ReturnButton onClick={backToLogin}/>
    </>
  )
}

export default QrCodeForm