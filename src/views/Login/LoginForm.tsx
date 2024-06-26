import {LoginState, useLoginStateContext} from "@/views/Login/useLogin.tsx";
import {Alert, Button, Checkbox, Col, Divider, Form, Input, Row} from "antd";
import {AiFillGithub, AiFillGoogleCircle, AiFillWechat} from "react-icons/ai";
import {useTranslation} from "react-i18next";

const LoginForm = () => {
  const {loginState, setLoginState} = useLoginStateContext()
  if (loginState !== LoginState.LOGIN) return null

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  const {t} = useTranslation()
  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">{t('sys.login.signInFormTitle')}</div>
      <Form name="normal_login" size="large" initialValues={{remember: true}} onFinish={onFinish}>
        <div className="mb-4 flex flex-col">
          <Alert
            description={
              `${t('sys.login.userName')}: demo@minimals.cc / ${t('sys.login.password',)}: demo1234`
            }
            type="info"
            showIcon
          />
        </div>

        <Form.Item
          name="username"
          rules={[{required: true, message: t('sys.login.accountPlaceholder')}]}
        >
          <Input placeholder={t('sys.login.userName')}/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: t('sys.login.passwordPlaceholder')}]}
        >
          <Input.Password type="password" placeholder={t('sys.login.password')}/>
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>{t('sys.login.rememberMe')}</Checkbox>
              </Form.Item>
            </Col>
            <Col span={12} className="text-right">
              <button
                className="!text-black !underline"
                onClick={() => setLoginState(LoginState.RESET_PASSWORD)}
              >
                {t('sys.login.forgetPassword')}
              </button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full !bg-black">
            {t('sys.login.loginButton')}
          </Button>
        </Form.Item>

        <Row align="middle" gutter={10}>
          <Col span={8} flex="1">
            <Button className="w-full" onClick={() => setLoginState(LoginState.MOBILE)}>
              {t('sys.login.mobileSignInFormTitle')}
            </Button>
          </Col>
          <Col span={8} flex="1">
            <Button className="w-full" onClick={() => setLoginState(LoginState.QR_CODE)}>
              {t('sys.login.qrSignInFormTitle')}
            </Button>
          </Col>
          <Col span={8} flex="1" onClick={() => setLoginState(LoginState.REGISTER)}>
            <Button className="w-full">{t('sys.login.signUpFormTitle')}</Button>
          </Col>
        </Row>

        <Divider className="!text-xs !text-[#00000073]">{t('sys.login.otherSignIn')}</Divider>

        <div className="flex cursor-pointer justify-around text-2xl">
          <AiFillGithub className="hover:text-[#00A76F]"/>
          <AiFillWechat className="hover:text-[#00A76F]"/>
          <AiFillGoogleCircle className="hover:text-[#00A76F]"/>
        </div>
      </Form>
    </>
  )
}


export default LoginForm