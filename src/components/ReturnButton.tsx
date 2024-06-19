import {MdArrowBackIosNew} from "react-icons/md"
import {Button} from "antd"
import {useTranslation} from "react-i18next"

interface ReturnButtonProps {
  onClick?: () => void,
}

const ReturnButton = ({ onClick }: ReturnButtonProps) => {
  const { t } = useTranslation()
  return (
    <>
      <Button block type="link" onClick={onClick}>
        <div className="flex items-center justify-center text-black hover:underline">
          <MdArrowBackIosNew />
          <span className="text-sm">{t('sys.login.backSignIn')}</span>
        </div>
      </Button>
    </>
  )
}

export default ReturnButton