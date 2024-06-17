import {QRCode} from "antd"
import {LoginState, useLoginStateContext} from "@/views/Login/useLogin.tsx"
import ReturnButton from "@/components/ReturnButton.tsx"

const QrCodeForm = () => {
  const { loginState, backToLogin } = useLoginStateContext()

  if (loginState !== LoginState.QR_CODE) return null
  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">二维码登录</div>
      <div className="flex w-full flex-col items-center justify-center">
        <QRCode value="https://ant.design/" size={300} />
        <p className="my-4 text-sm !text-[#00000073]">扫码后点击“确认”，即可完成登录</p>
      </div>
      <ReturnButton onClick={backToLogin} />
    </>
  )
}

export default QrCodeForm