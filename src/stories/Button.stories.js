import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};
const Template = (args) => <Button {...args} />;
export const Regular = Template.bind({});
Regular.args = {
  backgroundColor: 'red',
  label: 'press me',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'red',

  label: 'press me',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'red',

  label: 'press me',
  size: 'lg',
};
