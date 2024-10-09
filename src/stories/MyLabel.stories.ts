import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
    title: 'MyLabel',
    component: MyLabel,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'inline-radio',
            }
        },
        fontColor: {
            control: {
                type: 'color',
            }
        }
    }
} satisfies Meta<typeof MyLabel>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Hello, World!',
    }
};


export const AllCaps: Story = {
    args: {
        label: 'Hello, World!',
        allCaps: true
    }
};

export const Secondary: Story = {
    args: {
        label: 'Hello, World!',
        color: 'text-secondary'
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Hello, World!',
        fontColor: '#ff0000'
    }
};