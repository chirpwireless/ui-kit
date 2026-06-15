import type { Meta, StoryObj } from '@storybook/react';
import { DialogContentText, Typography } from '@mui/material';

import { Dialog, DialogContent } from './Dialog';

const meta: Meta<typeof Dialog> = {
    title: 'UI/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    render: () => (
        <Dialog open>
            <DialogContent>
                <DialogContentText sx={{ maxWidth: '420px', textAlign: 'center' }}>
                    Are you sure you want to unshare this device with user{' '}
                    <Typography component="span" textTransform="none">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dicta eaque asperiores
                        pariatur et, recusandae sed ipsam ad vero sequi molestias veniam eveniet cupiditate provident
                        quis, ratione obcaecati! Perferendis, cupiditate.
                    </Typography>
                    ?
                </DialogContentText>
            </DialogContent>
        </Dialog>
    ),
};
