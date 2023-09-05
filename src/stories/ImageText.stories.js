import ImageText from '../components/ImageText';
import amazonLogo from '../image/amazon-logo.webp';

export default {
  title: 'Components/ImageText',
  component: ImageText,
};

const Template = ({ ...args }) => <ImageText {...args} />;

export const ImageTextReg = Template.bind({});
ImageTextReg.args = {
  desc: 'ImageText ',
  imageUrl: amazonLogo,
};
