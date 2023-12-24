import { height, width } from 'res/sizes';

const widthDesign = 375;
const heightDesign = 812;
const scale = (size: number, accordingHeight?: boolean) => {
  if (accordingHeight) {
    return (size * height) / heightDesign;
  }
  return (size * width) / widthDesign;
};

export default scale;
