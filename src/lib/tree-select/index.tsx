import React, { useRef } from 'react';
import { Box, Popover, MenuItem } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view';
import { Select, SelectPropsType } from '../select';
import * as S from './style';
import { SelectIndicator } from '../select-indicator';

export type TreeNodeType = {
    id: string;
    label: string;
    children?: TreeNodeType[];
};

interface TreeSelectProps {
    options: TreeNodeType[];
    disabled?: boolean;
    label?: string;
    selectedNode?: TreeNodeType;
    width?: number | string;
    selectProps: SelectPropsType;
    treeViewMaxHeight?: number;
    onChange?: (selectedValue: TreeNodeType) => void;
}

// FYI: если необходимо, можно воспроизвести работу с дженериком, но нужно будет вынести метод resolveTitle, resolveId
export const TreeSelect: React.FC<TreeSelectProps> = ({
    options,
    onChange,
    width = '100%',
    selectProps,
    disabled,
    treeViewMaxHeight,
    selectedNode,
}) => {
    const [open, setOpen] = React.useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const handleNodeSelect = (node: TreeNodeType, isParent?: boolean) => {
        if (!isParent) {
            onChange && onChange(node);
            setOpen(false);
        }
    };

    const renderTree = (nodes: TreeNodeType[], level = 0) =>
        nodes.map((node) => (
            <S.TreeItem
                key={node.id}
                itemId={node.id}
                label={node.label}
                level={level}
                onClick={() => handleNodeSelect(node, Array.isArray(node.children))}
            >
                {Array.isArray(node.children) ? renderTree(node.children, level + 1) : null}
            </S.TreeItem>
        ));

    return (
        <Box sx={{ width }}>
            <div ref={selectRef}>
                <Select
                    {...selectProps}
                    value={selectedNode?.id || ''}
                    displayEmpty
                    open={false}
                    disabled={disabled}
                    onOpen={() => setOpen(true)}
                >
                    <MenuItem value={selectedNode?.id}>{selectedNode?.label}</MenuItem>
                </Select>
            </div>
            <Popover
                id="simple-popover"
                open={open}
                onClose={() => setOpen(false)}
                anchorEl={selectRef.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <SimpleTreeView
                    sx={{
                        width: selectRef.current?.getBoundingClientRect().width,
                        maxHeight: treeViewMaxHeight,
                        paddingTop: '8px !important',
                        paddingBottom: '8px !important',
                    }}
                    selectedItems={selectedNode?.id || ''}
                    slots={{
                        expandIcon: SelectIndicator,
                    }}
                >
                    {renderTree(options)}
                </SimpleTreeView>
            </Popover>
        </Box>
    );
};
