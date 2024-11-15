import type { Meta, StoryObj } from '@storybook/react';
import { ClickableColorCell, ColorPicker } from '@chirp/ui/lib';
import { useState } from 'react';
import { Stack, Box } from '@mui/material';

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
        const [color4, setColor4] = useState('#ff00ff');
        console.log(color);
        return (
            <Box width="400px">
                <Stack gap={5}>
                    <ColorPicker color={color} onChange={setColor} />
                    <ColorPicker color={color2} onChange={setColor2} />
                    <ColorPicker color={color3} onChange={setColor3} />
                    <ColorPicker color={color4} onChange={setColor4} />
                </Stack>
                <Stack></Stack>
            </Box>
        );
    },
};

export const СlickableСolorСells: Story = {
    render: () => {
        const [color, setColor] = useState('#aabbcc');

        return (
            <Box width="400px">
                <Stack gap={5}>
                    <ColorPicker color={color} onChange={setColor} />
                    <Stack gap={2}>
                        small
                        <Stack direction="row" justifyContent="space-between">
                            <ClickableColorCell color="#aabbcc" onClick={() => setColor('#aabbcc')} size="small" />
                            <ClickableColorCell color="#ff00ff" onClick={() => setColor('#ff00ff')} size="small" />
                            <ClickableColorCell color="#00ff0f" onClick={() => setColor('#00ff0f')} size="small" />
                        </Stack>
                    </Stack>
                    <Stack gap={2}>
                        medium
                        <Stack direction="row" justifyContent="space-between">
                            <ClickableColorCell color="#aabbcc" onClick={() => setColor('#aabbcc')} size="medium" />
                            <ClickableColorCell color="#ff00ff" onClick={() => setColor('#ff00ff')} size="medium" />
                            <ClickableColorCell color="#00ff0f" onClick={() => setColor('#00ff0f')} size="medium" />
                        </Stack>
                    </Stack>
                    <Stack gap={2}>
                        large
                        <Stack direction="row" justifyContent="space-between">
                            <ClickableColorCell color="#aabbcc" onClick={() => setColor('#aabbcc')} size="medium" />
                            <ClickableColorCell color="#ff00ff" onClick={() => setColor('#ff00ff')} size="medium" />
                            <ClickableColorCell color="#00ff0f" onClick={() => setColor('#00ff0f')} size="medium" />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack></Stack>
            </Box>
        );
    },
};
