import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};
const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  backgroundColor: '#E16036',
  label: 'press me',
  size: 'sm',
  hoverBgColor: '#E16036',
};

export const Medium = Template.bind({});
Medium.args = {
  backgroundColor: '#FA7E61',
  label: 'press me',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: '#BCAB79',

  label: 'press me',
  size: 'lg',
};
