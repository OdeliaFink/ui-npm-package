import CouponCard from '../components/CouponCard';
import img1 from '../image/img1.avif';

export default {
  title: 'Components/CouponCard',
  component: CouponCard,
};

const Template = ({ ...args }) => <CouponCard {...args} />;

export const CouponCardTest = Template.bind({});
CouponCardTest.args = {
  title: '$200 bonus on orders over $200 for active members',
  image: img1,
};
export const CouponCardNoText = Template.bind({});
CouponCardNoText.args = {
  image: img1,
};
