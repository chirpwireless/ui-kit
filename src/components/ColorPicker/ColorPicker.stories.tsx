import { Box, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
    title: 'UI/ColorPicker',
    component: ColorPicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
    render: () => {
        const [color, setColor] = useState('#aabbcc');
        const [color2, setColor2] = useState('#123456');
        const [color3, setColor3] = useState('#00ff00');

        return (
            <Box width="400px">
                <Stack gap={5}>
                    <ColorPicker title="color1" value={color} onChange={setColor} />
                    <ColorPicker title="color2" value={color2} onChange={setColor2} />
                    <ColorPicker title="color3" value={color3} onChange={setColor3} />
                </Stack>
            </Box>
        );
    },
};

export const ClickableColorCells: Story = {
    render: () => {
        const [color, setColor] = useState('#aabbcc');

        const swatches = ['#aabbcc', '#ff00ff', '#00ff0f'];

        return (
            <Box width="400px">
                <Stack gap={5}>
                    <ColorPicker value={color} onChange={setColor} />
                    <Stack direction="row" justifyContent="space-between">
                        {swatches.map((swatch) => (
                            <Box
                                key={swatch}
                                onClick={() => setColor(swatch)}
                                sx={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: 1,
                                    backgroundColor: swatch,
                                    cursor: 'pointer',
                                }}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Box>
        );
    },
};
