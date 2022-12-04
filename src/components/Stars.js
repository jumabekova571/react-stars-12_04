import { IconStar } from '@tabler/icons';

function Stars({
  fillColor = '#ffe527',
  strokeColor = '#b9a200',
  inActiveColor = '#d9d9d9',
  strokeWidth = 1,
  maxStarsCount = 5,
  activeStarsCount = 3, 
}){
  return Array(maxStarsCount).fill(null).map((_, index) => {
    const isActive = index < activeStarsCount;
    return (
      <IconStar
        fill={isActive ? fillColor : inActiveColor}
        color={isActive ? strokeColor : inActiveColor}
        strokeWidth={strokeWidth}
      />
    );
  })
}

export default Stars;