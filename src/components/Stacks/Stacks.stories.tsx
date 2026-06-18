import type { Meta, StoryObj } from '@storybook/react';
import type { FC, PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { StackRow, StackRowJC, StackRowJB, StackColumn, StackColumnS } from './index';

const meta: Meta<typeof StackRow> = {
    title: 'UI/Stacks',
    component: StackRow,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        gap: {
            control: 'text',
            description: 'number → theme.spacing(n), string → raw CSS value. Default: theme.spacing(2).',
        },
    },
};

export default meta;

type Story = StoryObj<typeof StackRow>;

// Visible block so flex direction / alignment / gap are observable in each variant.
const Item: FC<PropsWithChildren> = ({ children }) => (
    <Box
        sx={{
            px: 2,
            py: 1,
            borderRadius: 1,
            bgcolor: 'action.selected',
            minWidth: 56,
            textAlign: 'center',
        }}
    >
        {children}
    </Box>
);

// Bordered frame gives the row variants a width so justifyContent is visible.
const frameSx = {
    width: 360,
    p: 1.5,
    border: '1px dashed',
    borderColor: 'divider',
    borderRadius: 1,
} as const;

export const Row: Story = {
    name: 'StackRow',
    args: { gap: 2 },
    render: (args) => (
        <StackRow {...args} sx={frameSx}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
        </StackRow>
    ),
};

export const RowJustifyCenter: Story = {
    name: 'StackRowJC (justify center)',
    args: { gap: 2 },
    render: (args) => (
        <StackRowJC {...args} sx={frameSx}>
            <Item>1</Item>
            <Item>2</Item>
        </StackRowJC>
    ),
};

export const RowJustifyBetween: Story = {
    name: 'StackRowJB (space-between)',
    args: { gap: 2 },
    render: (args) => (
        <StackRowJB {...args} sx={frameSx}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
        </StackRowJB>
    ),
};

export const Column: Story = {
    name: 'StackColumn (align center)',
    args: { gap: 2 },
    render: (args) => (
        <StackColumn {...args} sx={frameSx}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
        </StackColumn>
    ),
};

export const ColumnStart: Story = {
    name: 'StackColumnS (align start)',
    args: { gap: 2 },
    render: (args) => (
        <StackColumnS {...args} sx={frameSx}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
        </StackColumnS>
    ),
};

export const AllVariants: Story = {
    parameters: { layout: 'padded' },
    render: () => {
        const variants = [
            { label: 'StackRow', Component: StackRow },
            { label: 'StackRowJC', Component: StackRowJC },
            { label: 'StackRowJB', Component: StackRowJB },
            { label: 'StackColumn', Component: StackColumn },
            { label: 'StackColumnS', Component: StackColumnS },
        ];

        return (
            <StackColumnS gap={3} sx={{ width: 400 }}>
                {variants.map(({ label, Component }) => (
                    <Box key={label} sx={{ width: '100%' }}>
                        <Typography variant="body2" sx={{ mb: 1, opacity: 0.7 }}>
                            {label}
                        </Typography>
                        <Component gap={2} sx={frameSx}>
                            <Item>1</Item>
                            <Item>2</Item>
                            <Item>3</Item>
                        </Component>
                    </Box>
                ))}
            </StackColumnS>
        );
    },
};
