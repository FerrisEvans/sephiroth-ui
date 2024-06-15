interface SvgIconProps {
  prefix?: string
  icon: string
  color?: string
  size?: string
}

const SvgIcon = ({prefix = 'icon', icon, color = 'currentColor', size = '1em'}: SvgIconProps) => {
  const symbolId = `#${prefix}-${icon}`
  const svgStyle = {
    width: size,
    height: size,
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="fill-current inline-block h-[1em] w-[1em] overflow-hidden align-[-0.15em] outline-none"
        style={svgStyle}
      >
        <use xlinkHref={symbolId} fill={color} color={color}/>
      </svg>
    </>
  )
}

export default SvgIcon