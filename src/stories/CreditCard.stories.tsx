import type { Meta, StoryObj } from '@storybook/react';
import CreditCard from '../components/CreditCard';
import GlobalStyles from '../GlobalStyles';
import MasterCard from '../assets/images/mastercard.png';
import VisaCard from '../assets/images/visa.png';

const meta = {
  title: 'CreditCard',
  component: CreditCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
  argTypes: {
    cardNumbers: {
      control: 'text',
      description: '카드 번호 입력 값',
    },
    month: {
      control: 'text',
      description: '카드 월 입력 값',
    },
    year: {
      control: 'text',
      description: '카드 연도 입력 값',
    },
    name: {
      control: 'text',
      description: '카드 소유자 입력 값',
    },
    cardImageSrc: {
      control: [MasterCard, VisaCard],
      description: '카드 브랜드 이미지',
    },
  },
} satisfies Meta<typeof CreditCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: [
      { value: '0000', isError: false },
      { value: '0000', isError: false },
      { value: '0000', isError: false },
      { value: '0000', isError: false },
    ],
    month: '00',
    year: '00',
    name: 'JOHN DOE',
    cardImageSrc: '',
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: [
      { value: '4321', isError: false },
      { value: '1234', isError: false },
      { value: '1234', isError: false },
      { value: '9876', isError: false },
    ],
    month: '12',
    year: '29',
    name: 'LIM DONGJUN',
    cardImageSrc: VisaCard,
  },
};

export const Master: Story = {
  args: {
    cardNumbers: [
      { value: '5323', isError: false },
      { value: '1234', isError: false },
      { value: '4321', isError: false },
      { value: '9872', isError: false },
    ],
    month: '12',
    year: '29',
    name: 'LIM DONGJUN',
    cardImageSrc: MasterCard,
  },
};