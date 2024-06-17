import {MdArrowBackIosNew} from "react-icons/md"
import {Button} from "antd"

interface ReturnButtonProps {
  onClick?: () => void,
}

const ReturnButton = ({ onClick }: ReturnButtonProps) => {
  return (
    <>
      <Button block type="link" onClick={onClick}>
        <div className="flex items-center justify-center text-black hover:underline">
          <MdArrowBackIosNew />
          <span className="text-sm">返回</span>
        </div>
      </Button>
    </>
  )
}

export default ReturnButton