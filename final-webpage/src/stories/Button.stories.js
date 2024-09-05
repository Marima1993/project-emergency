import { fn } from '@storybook/test';
import { Button } from '../components/Button';


export default {
    title: 'Example/Button',
    component: Button,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        backgroundColor: { control: 'color' },
    },

    args: { onClick: fn() },
};


export const Primary = {
    args: {
        primary: true,
        label: `Event 
        Description`,
        size: "large",
        backgroundColor: "#101010",
        color: "#FFFFFF",



    },
};

export const Secondary = {
    args: {
        label: `Event 
        Description`,
        primary: false
    },
};


