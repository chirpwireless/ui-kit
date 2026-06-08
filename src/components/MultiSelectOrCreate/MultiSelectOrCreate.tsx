import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    Autocomplete,
    Box,
    ClickAwayListener,
    FormControl,
    IconButton,
    InputAdornment,
    Paper,
    styled,
    TextField,
    Typography,
} from '@mui/material';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { EditIcon, TrashIcon } from '../../icons';
import { chirpPalette } from '../../theme/palette';
import { Checkbox } from '../Checkbox';
import { InputLabel } from '../Select/components/InputLabel';

import { CustomPaper } from './CustomPaper';
import { CustomPopper } from './CustomPopper';
import { MultiSelectOrCreateProps, Tag } from './types';

const DropdownIcon = styled(KeyboardArrowDownIcon)(({ theme }) => ({
    fontSize: '18px',
    color: chirpPalette(theme).neutral.grey4,
}));

export const MultiSelectOrCreate: React.FC<MultiSelectOrCreateProps> = ({
    tags,
    onTagsChange,
    onCreateTag,
    onUpdateTag,
    onDeleteTag,
    placeholder,
    label,
    disabled = false,
    addNewTagPlaceholder: addNewTagPlaceholderProp,
    enterTagNamePlaceholder: enterTagNamePlaceholderProp,
    multiple = true,
}) => {
    const { t } = useTranslation('uiKit');

    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [hoveredTagId, setHoveredTagId] = useState<string | null>(null);
    const [editingTagId, setEditingTagId] = useState<string | null>(null);
    const [editingValue, setEditingValue] = useState('');
    const [deleteConfirmTag, setDeleteConfirmTag] = useState<Tag | null>(null);
    const [editConfirmTag, setEditConfirmTag] = useState<Tag | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isAddingNewTag, setIsAddingNewTag] = useState(false);
    const [newTagValue, setNewTagValue] = useState('');
    const newTagInputRef = useRef<HTMLInputElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedTags = useMemo(() => tags.filter((tag) => tag.selected), [tags]);

    const handleTagSelect = useCallback(
        (tagId: string) => {
            if (!multiple) {
                // Single-select mode: select only the clicked tag
                const updatedTags = tags.map((tag) => ({
                    ...tag,
                    selected: tag.id === tagId,
                }));
                onTagsChange(updatedTags);
                setIsOpen(false);
            } else {
                // Multi-select mode: toggle selection
                const updatedTags = tags.map((tag) => (tag.id === tagId ? { ...tag, selected: !tag.selected } : tag));
                onTagsChange(updatedTags);
            }
        },
        [tags, onTagsChange, multiple],
    );

    const handleCreateTag = useCallback(
        (value: string) => {
            const trimmedValue = value.trim();

            if (trimmedValue && !tags.some((tag) => tag.name.toLowerCase() === trimmedValue.toLowerCase())) {
                onCreateTag(trimmedValue);
                setNewTagValue('');
                setIsAddingNewTag(false);
            }
        },
        [tags, onCreateTag],
    );

    const handleStartAddNewTag = useCallback(() => {
        setIsAddingNewTag(true);
        setNewTagValue('');
        setTimeout(() => newTagInputRef.current?.focus(), 0);
    }, []);

    const handleCancelAddNewTag = useCallback(() => {
        setIsAddingNewTag(false);
        setNewTagValue('');
    }, []);

    const handleStartEdit = useCallback((tag: Tag, e: React.MouseEvent) => {
        e.stopPropagation();
        setEditConfirmTag(tag);
    }, []);

    const handleConfirmStartEdit = useCallback(() => {
        if (editConfirmTag) {
            setEditingTagId(editConfirmTag.id);
            setEditingValue(editConfirmTag.name);
            setEditConfirmTag(null);
        }
    }, [editConfirmTag]);

    const handleCancelStartEdit = useCallback(() => {
        setEditConfirmTag(null);
    }, []);

    const handleSaveEdit = useCallback(() => {
        if (editingTagId && editingValue.trim()) {
            onUpdateTag(editingTagId, editingValue.trim());
        }
        setEditingTagId(null);
        setEditingValue('');
    }, [editingTagId, editingValue, onUpdateTag]);

    const handleCancelEdit = useCallback(() => {
        setEditingTagId(null);
        setEditingValue('');
    }, []);

    const handleDeleteClick = useCallback((tag: Tag, e: React.MouseEvent) => {
        e.stopPropagation();
        setDeleteConfirmTag(tag);
    }, []);

    const handleConfirmDelete = useCallback(() => {
        if (deleteConfirmTag) {
            onDeleteTag(deleteConfirmTag.id);
            setDeleteConfirmTag(null);
        }
    }, [deleteConfirmTag, onDeleteTag]);

    const handleCancelDelete = useCallback(() => {
        setDeleteConfirmTag(null);
    }, []);

    const handleOpen = useCallback(() => setIsOpen(true), []);

    const handleInputChange = useCallback((_: React.SyntheticEvent, value: string, reason: string) => {
        if (reason !== 'reset') {
            setInputValue(value);
        }
    }, []);

    const handleChange = useCallback(
        (_: React.SyntheticEvent, newValue: Tag | Tag[] | null, reason: string) => {
            if (reason === 'clear') {
                const updatedTags = tags.map((tag) => ({ ...tag, selected: false }));
                onTagsChange(updatedTags);
            } else if (reason === 'selectOption' || reason === 'removeOption') {
                if (!multiple) {
                    // Single-select mode: newValue is a single Tag or null
                    const selectedTag = newValue as Tag | null;
                    const updatedTags = tags.map((tag) => ({
                        ...tag,
                        selected: selectedTag ? tag.id === selectedTag.id : false,
                    }));
                    onTagsChange(updatedTags);

                    // Close dropdown after selection
                    if (reason === 'selectOption') {
                        setIsOpen(false);
                    }
                } else {
                    // Multi-select mode: newValue is Tag[]
                    const selectedIds = new Set((newValue as Tag[]).map((tag) => tag.id));
                    const updatedTags = tags.map((tag) => ({
                        ...tag,
                        selected: selectedIds.has(tag.id),
                    }));
                    onTagsChange(updatedTags);
                }
            }
        },
        [tags, onTagsChange, multiple],
    );

    const filterOptions = useCallback((options: Tag[]) => options, []);
    const getOptionLabel = useCallback((option: Tag) => option.name, []);
    const isOptionEqualToValue = useCallback((option: Tag, value: Tag) => option.id === value.id, []);

    const stateRef = useRef({
        searchValue,
        setSearchValue,
        isAddingNewTag,
        newTagValue,
        setNewTagValue,
        handleStartAddNewTag,
        handleCreateTag,
        handleCancelAddNewTag,
        searchPlaceholder: t('Search'),
        addNewTagPlaceholder: addNewTagPlaceholderProp || t('Enter tag name here to add new tag...'),
        enterTagNamePlaceholder: enterTagNamePlaceholderProp || t('Enter tag name'),
        newTagInputRef,
        searchInputRef,
        dropdownRef,
        deleteConfirmTag,
        handleConfirmDelete,
        handleCancelDelete,
        deleteTitle: t('Are you sure you want to delete "{{name}}" tag?'),
        deleteSubtitle: t("After you delete this tag, the devices it's assigned to will no longer use it."),
        cancelText: t('Cancel'),
        confirmDeleteText: t('Yes, delete'),
        editConfirmTag,
        handleConfirmStartEdit,
        handleCancelStartEdit,
        editTitle: t('Are you sure you want to edit "{{name}}" tag?', {
            defaultValue: 'Are you sure you want to edit "{{name}}" tag?',
        }),
        editSubtitle: t('After you edit this tag, the devices it is assigned to will use the updated name.', {
            defaultValue: 'After you edit this tag, the devices it is assigned to will use the updated name.',
        }),
        confirmEditText: t('Yes, edit', { defaultValue: 'Yes, edit' }),
    });

    // Обновляем ref при каждом рендере
    stateRef.current = {
        searchValue,
        setSearchValue,
        isAddingNewTag,
        newTagValue,
        setNewTagValue,
        handleStartAddNewTag,
        handleCreateTag,
        handleCancelAddNewTag,
        searchPlaceholder: t('Search'),
        addNewTagPlaceholder: addNewTagPlaceholderProp || t('Enter tag name here to add new tag...'),
        enterTagNamePlaceholder: enterTagNamePlaceholderProp || t('Enter tag name'),
        newTagInputRef,
        searchInputRef,
        dropdownRef,
        deleteConfirmTag,
        handleConfirmDelete,
        handleCancelDelete,
        deleteTitle: t('Are you sure you want to delete "{{name}}" tag?'),
        deleteSubtitle: t("After you delete this tag, the devices it's assigned to will no longer use it."),
        cancelText: t('Cancel'),
        confirmDeleteText: t('Yes, delete'),
        editConfirmTag,
        handleConfirmStartEdit,
        handleCancelStartEdit,
        editTitle: t('Are you sure you want to edit "{{name}}" tag?', {
            defaultValue: 'Are you sure you want to edit "{{name}}" tag?',
        }),
        editSubtitle: t('After you edit this tag, the devices it is assigned to will use the updated name.', {
            defaultValue: 'After you edit this tag, the devices it is assigned to will use the updated name.',
        }),
        confirmEditText: t('Yes, edit', { defaultValue: 'Yes, edit' }),
    };

    const PaperComponentMemo = useMemo(() => {
        const PaperComp: React.FC<React.ComponentProps<typeof Paper>> = (paperProps) => {
            const state = stateRef.current;

            return (
                <CustomPaper
                    {...paperProps}
                    searchValue={state.searchValue}
                    onSearchChange={state.setSearchValue}
                    searchPlaceholder={state.searchPlaceholder}
                    isAddingNewTag={state.isAddingNewTag}
                    newTagValue={state.newTagValue}
                    onNewTagValueChange={state.setNewTagValue}
                    onStartAddNewTag={state.handleStartAddNewTag}
                    onCreateTag={state.handleCreateTag}
                    onCancelAddNewTag={state.handleCancelAddNewTag}
                    addNewTagPlaceholder={state.addNewTagPlaceholder}
                    enterTagNamePlaceholder={state.enterTagNamePlaceholder}
                    newTagInputRef={state.newTagInputRef as React.RefObject<HTMLInputElement>}
                    searchInputRef={state.searchInputRef as React.RefObject<HTMLInputElement>}
                    dropdownRef={state.dropdownRef as React.RefObject<HTMLDivElement>}
                    deleteConfirmTag={state.deleteConfirmTag}
                    onConfirmDelete={state.handleConfirmDelete}
                    onCancelDelete={state.handleCancelDelete}
                    deleteTitle={state.deleteTitle}
                    deleteSubtitle={state.deleteSubtitle}
                    cancelText={state.cancelText}
                    confirmDeleteText={state.confirmDeleteText}
                    editConfirmTag={state.editConfirmTag}
                    onConfirmStartEdit={state.handleConfirmStartEdit}
                    onCancelStartEdit={state.handleCancelStartEdit}
                    editTitle={state.editTitle}
                    editSubtitle={state.editSubtitle}
                    confirmEditText={state.confirmEditText}
                />
            );
        };

        return PaperComp;
    }, []);

    const handleClose = useCallback((event: React.SyntheticEvent, reason: string) => {
        if (reason === 'blur') {
            const focusTarget = (event as React.FocusEvent).relatedTarget as Node;

            if (dropdownRef.current && dropdownRef.current.contains(focusTarget)) {
                return;
            }
        }

        // Don't close when clicking inside the dropdown (search, new tag input, etc.)
        if (reason === 'toggleInput') {
            return;
        }

        setIsOpen(false);
        setSearchValue('');
    }, []);

    const renderOptionMemo = useCallback(
        (props: React.HTMLAttributes<HTMLLIElement>, option: Tag) => {
            if (searchValue.trim() && !option.name.toLowerCase().includes(searchValue.toLowerCase())) {
                return null;
            }

            const isEditing = editingTagId === option.id;
            const isHovered = hoveredTagId === option.id;

            if (isEditing) {
                return (
                    <Box
                        component="li"
                        key={option.id}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            p: 1,
                            width: '100%',
                        }}
                    >
                        <ClickAwayListener onClickAway={handleSaveEdit}>
                            <Box sx={{ flex: 1 }}>
                                <TextField
                                    size="small"
                                    value={editingValue}
                                    onChange={(e) => setEditingValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleSaveEdit();
                                        } else if (e.key === 'Escape') {
                                            handleCancelEdit();
                                        }
                                    }}
                                    autoFocus
                                    fullWidth
                                    onClick={(e) => e.stopPropagation()}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    size="small"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleSaveEdit();
                                                    }}
                                                >
                                                    <CheckIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton
                                                    size="small"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleCancelEdit();
                                                    }}
                                                >
                                                    <CloseIcon fontSize="small" />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                        </ClickAwayListener>
                    </Box>
                );
            }

            return (
                <Box
                    component="li"
                    {...props}
                    key={option.id}
                    onMouseEnter={() => setHoveredTagId(option.id)}
                    onMouseLeave={() => setHoveredTagId(null)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        width: '100%',
                        px: 1,
                        py: 0.5,
                        '&:hover': {
                            bgcolor: 'borders.primary',
                        },
                    }}
                >
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTagSelect(option.id);
                        }}
                    >
                        <Checkbox checked={option.selected} />
                        <Typography variant="body2">{option.name}</Typography>
                    </Box>

                    {isHovered && (
                        <Box sx={{ display: 'flex', gap: 0.5, flexShrink: 0 }}>
                            <IconButton
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handleStartEdit(option, e);
                                }}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handleDeleteClick(option, e);
                                }}
                            >
                                <TrashIcon />
                            </IconButton>
                        </Box>
                    )}
                </Box>
            );
        },
        [
            searchValue,
            editingTagId,
            hoveredTagId,
            handleSaveEdit,
            editingValue,
            handleCancelEdit,
            setHoveredTagId,
            handleTagSelect,
            handleStartEdit,
            handleDeleteClick,
        ],
    );

    const handleClickAway = useCallback(() => {
        if (isOpen) {
            setIsOpen(false);
            setSearchValue('');
            setIsAddingNewTag(false);
            setNewTagValue('');
        }
    }, [isOpen]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <FormControl fullWidth>
                <InputLabel
                    label={label}
                    className={isOpen ? 'Mui-focused' : undefined}
                    sx={{
                        '&.MuiInputLabel-shrink': {
                            fontSize: '14px',
                            lineHeight: '20px',
                            top: '8px',
                            left: '-12px',
                        },
                        '&.Mui-focused': {
                            color: 'primaryColors.accent',
                        },
                        padding: 0,
                        left: '-12px',
                        color: 'neutral.primary',
                    }}
                />
                <Autocomplete
                    multiple={multiple}
                    open={isOpen}
                    onOpen={handleOpen}
                    onClose={handleClose}
                    disabled={disabled}
                    options={tags}
                    value={multiple ? selectedTags : selectedTags[0] || null}
                    inputValue={inputValue}
                    onInputChange={handleInputChange}
                    onChange={handleChange}
                    getOptionLabel={getOptionLabel}
                    isOptionEqualToValue={isOptionEqualToValue}
                    disableCloseOnSelect={multiple}
                    filterOptions={filterOptions}
                    autoHighlight={false}
                    disableListWrap
                    ListboxProps={{
                        style: { scrollBehavior: 'auto', maxHeight: '300px', overflow: 'auto' },
                    }}
                    renderInput={(params) => {
                        const selectedNames = selectedTags.map((tag) => tag.name).join(', ');

                        return (
                            <TextField
                                {...params}
                                placeholder={selectedNames || placeholder || t('Select tags')}
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: null,
                                }}
                                inputProps={{
                                    ...params.inputProps,
                                    value: selectedNames || params.inputProps?.value || '',
                                    readOnly: true,
                                }}
                            />
                        );
                    }}
                    renderTags={() => null}
                    renderOption={renderOptionMemo}
                    popupIcon={<DropdownIcon />}
                    PopperComponent={CustomPopper}
                    PaperComponent={PaperComponentMemo}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            bgcolor: 'neutral.grey1',
                            borderRadius: '8px',
                            height: '36px',
                            minHeight: '36px',
                            border: '1px solid',
                            borderColor: 'borders.primary',
                            '&:hover': {
                                borderColor: 'primaryColors.accent',
                            },
                            '&.Mui-focused': {
                                borderColor: 'primaryColors.accent',
                            },
                        },
                        '& .MuiInputBase-root': {
                            padding: '0 !important',
                            paddingRight: '40px !important',
                        },
                        '& .MuiAutocomplete-option': {
                            padding: '0 !important',
                            '&[aria-selected="true"]': {
                                bgcolor: 'transparent !important',
                            },
                            '&.Mui-focused': {
                                bgcolor: 'transparent !important',
                            },
                        },
                        '& .MuiAutocomplete-input': {
                            padding: '8px 16px !important',
                            fontSize: '13px',
                            lineHeight: '20px',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& fieldset': {
                            border: 'none',
                        },
                        '& .MuiAutocomplete-endAdornment': {
                            right: '16px !important',
                        },
                        '& .MuiAutocomplete-popupIndicator:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                />
            </FormControl>
        </ClickAwayListener>
    );
};
