import {LoginStateProvider} from "@/views/Login/useLogin.tsx"
import LoginForm from "@/views/Login/LoginForm.tsx"
import MobileForm from "@/views/Login/MobileForm.tsx"
import QrCodeForm from "@/views/Login/QrCodeForm.tsx"
import RegisterForm from "@/views/Login/RegisterForm.tsx"
import ResetForm from "@/views/Login/ResetForm.tsx"
import {useTranslation} from "react-i18next"
import LocalePicker from "@/components/locale-picker"
import {Layout, Typography} from "antd"
import Color from 'color'
import {useThemeToken} from "@/theme/use-theme-token.ts"
import Overlay2 from '@/assets/images/background/overlay_2.jpg'
import DashboardImg from '@/assets/images/background/dashboard.png'


const Login = () => {
  const { colorBgElevated } = useThemeToken()
  const gradientBg = Color(colorBgElevated).alpha(0.9).toString()
  const bg = `linear-gradient(${gradientBg}, ${gradientBg}) center center / cover no-repeat,url(${Overlay2})`;

  const {t} = useTranslation()

  return (
    <>
      <Layout className="relative flex !min-h-screen !w-full !flex-row">
        <div
          className="hidden grow flex-col items-center justify-center gap-[80px] bg-center  bg-no-repeat md:flex"
          style={{
            background: bg,
          }}
        >
          <div className="text-3xl font-bold leading-normal lg:text-4xl xl:text-5xl">Slash Admin</div>
          <img className="max-w-[480px] xl:max-w-[560px]" src={DashboardImg} alt="" />
          <Typography.Text className="flex flex-row gap-[16px] text-2xl">
            {t('sys.login.signInSecondTitle')}
          </Typography.Text>
        </div>

        <div className="m-auto flex !h-screen w-full max-w-[480px] flex-col justify-center px-[16px] lg:px-[64px]">
          <LoginStateProvider>
            <LoginForm />
            <MobileForm />
            <QrCodeForm />
            <RegisterForm />
            <ResetForm />
          </LoginStateProvider>
        </div>

        <div className="absolute right-2 top-0">
          <LocalePicker />
        </div>
      </Layout>
    </>
  )
}

export default Login