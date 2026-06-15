import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';

import { Button } from '../Button';
import { Toast } from './Toast';
import { ToastContainer } from './ToastContainer';

const meta: Meta<typeof Toast> = {
    title: 'UI/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    render: () => (
        <Box width="400px" height="400px">
            <Button
                variant="primary"
                onClick={() => toast(<Toast id="demo-toast" status="success" message="Toast message" />)}
            >
                Show
            </Button>
            <ToastContainer />
        </Box>
    ),
};
