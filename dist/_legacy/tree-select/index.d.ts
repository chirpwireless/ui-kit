import { default as React } from 'react';
import { SelectPropsType } from '../select';
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
export declare const TreeSelect: React.FC<TreeSelectProps>;
export {};
