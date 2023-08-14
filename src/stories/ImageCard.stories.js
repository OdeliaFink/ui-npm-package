import { ImageCard } from '../components/ImageCard';

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
  // argTypes: {
  //   label: { control: 'search...' },
  // },
};

const Template = ({ ...args }) => <ImageCard {...args} />;

export const ImageCardReg = Template.bind({});
ImageCardReg.args = {};
