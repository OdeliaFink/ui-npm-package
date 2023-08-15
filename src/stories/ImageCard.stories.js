import { ImageCard } from '../components/ImageCard';
import img1 from '../image/img1.avif';

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
  // argTypes: {
  //   label: { control: 'search...' },
  // },
};

const Template = ({ imageUrl, desc, ...args }) => <ImageCard {...args} />;

export const ImageCardReg = Template.bind({});
ImageCardReg.args = {
  imageUrl: '../image/img1.avif',
  desc: 'buy now',
};
