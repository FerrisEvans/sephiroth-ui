import { Icon } from '@iconify/react'
import styled from 'styled-components'

import type { IconProps } from '@iconify/react'

interface Props extends IconProps {
  size?: IconProps['width']
}

const StyledIconify = styled.div`
  display: inline-flex;
  vertical-align: middle;
  svg {
    display: inline-block;
  }
`;

const IconifyIcon = ({ icon, size = '1em', className = '', ...other }: Props) => {
  return (
    <>
      <StyledIconify className="anticon">
        <Icon icon={icon} width={size} height={size} className={`m-auto ${className}`} {...other} />
      </StyledIconify>
    </>
  )
}

export default IconifyIcon