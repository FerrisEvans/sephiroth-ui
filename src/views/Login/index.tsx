import {LoginStateProvider} from "@/views/Login/useLogin.tsx"
import LoginForm from "@/views/Login/LoginForm.tsx"
import MobileForm from "@/views/Login/MobileForm.tsx"
import QrCodeForm from "@/views/Login/QrCodeForm.tsx"
import RegisterForm from "@/views/Login/RegisterForm.tsx"
import ResetForm from "@/views/Login/ResetForm.tsx"

const Login = () => {
  return (
    <>
      <main className="flex min-h-screen flex-row">
        <div
          className="hidden grow flex-col items-center justify-center gap-[80px] bg-center  bg-no-repeat xl:flex"
          style={{
            background:
              'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)) center center / cover no-repeat,url(/src/assets/background/overlay_2.jpg)',
          }}
        >
          <h3 className="text-2xl font-bold leading-normal lg:text-3xl xl:text-4xl">
            Hi, Welcome back
          </h3>
          <img className="max-w-[720px]" src="/src/assets/illustration/dashboard.png" alt=""/>
          <div className="flex flex-row gap-[16px] text-2xl">开箱即用的中后台管理系统</div>
        </div>

        <div
          className="mx-auto flex w-full !min-w-[400px] max-w-[480px] flex-col px-[16px] py-[120px] lg:px-[64px] lg:py-[240px]">
          <LoginStateProvider>
            <LoginForm/>
            <MobileForm />
            <QrCodeForm />
            <RegisterForm />
            <ResetForm />
          </LoginStateProvider>
        </div>
      </main>
    </>
  )
}

export default Login