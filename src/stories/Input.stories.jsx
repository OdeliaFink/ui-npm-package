import { Input } from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  // argTypes: {
  //   label: { control: 'search...' },
  // },
};

const Template = ({ label, inFocusBorderColor, fontType, ...args }) => (
  <Input
    placeholder={label}
    {...args}
    inFocusBorderColor={inFocusBorderColor}
  />
);

export const RegularInput = Template.bind({});
RegularInput.args = {
  label: 'search',
  inFocusBorderColor: 'black',
};

export const DangerInput = Template.bind({});
DangerInput.args = {
  label: 'type now',
  inFocusBorderColor: 'red',
};
