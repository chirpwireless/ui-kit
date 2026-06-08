export type Tag = {
    id: string;
    name: string;
    selected: boolean;
};
export interface MultiSelectOrCreateProps {
    tags: Tag[];
    onTagsChange: (tags: Tag[]) => void;
    onCreateTag: (name: string) => void;
    onUpdateTag: (id: string, name: string) => void;
    onDeleteTag: (id: string) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    addNewTagPlaceholder?: string;
    enterTagNamePlaceholder?: string;
    multiple?: boolean;
}
