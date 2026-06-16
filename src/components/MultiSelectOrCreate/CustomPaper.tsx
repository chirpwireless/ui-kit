import { Box, ClickAwayListener, Paper, Stack, styled, TextField, Typography, useTheme } from '@mui/material';
import React from 'react';

import { EditIcon, SearchIcon, TrashIcon } from '../../icons';
import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

import { Tag } from './types';

const IconWrapper = styled(Box)(({ theme }) => ({
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: chirpPalette(theme).primaryColors.accent,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    '& svg': {
        width: '32px',
        height: '32px',
        color: theme.palette.common.white,
    },
}));

export interface CustomPaperProps {
    children?: React.ReactNode;
    searchValue: string;
    onSearchChange: (value: string) => void;
    searchPlaceholder: string;
    isAddingNewTag: boolean;
    newTagValue: string;
    onNewTagValueChange: (value: string) => void;
    onStartAddNewTag: () => void;
    onCreateTag: (value: string) => void;
    onCancelAddNewTag: () => void;
    addNewTagPlaceholder: string;
    enterTagNamePlaceholder: string;
    newTagInputRef: React.RefObject<HTMLInputElement>;
    searchInputRef: React.RefObject<HTMLInputElement>;
    dropdownRef: React.RefObject<HTMLDivElement>;
    deleteConfirmTag: Tag | null;
    onConfirmDelete: () => void;
    onCancelDelete: () => void;
    deleteTitle: string;
    deleteSubtitle: string;
    cancelText: string;
    confirmDeleteText: string;
    editConfirmTag: Tag | null;
    onConfirmStartEdit: () => void;
    onCancelStartEdit: () => void;
    editTitle: string;
    editSubtitle: string;
    confirmEditText: string;
}

export const CustomPaper = React.memo<CustomPaperProps & React.ComponentProps<typeof Paper>>(
    ({
        children,
        searchValue,
        onSearchChange,
        searchPlaceholder,
        isAddingNewTag,
        newTagValue,
        onNewTagValueChange,
        onStartAddNewTag,
        onCreateTag,
        onCancelAddNewTag,
        addNewTagPlaceholder,
        enterTagNamePlaceholder,
        newTagInputRef,
        searchInputRef,
        dropdownRef,
        deleteConfirmTag,
        onConfirmDelete,
        onCancelDelete,
        deleteTitle,
        deleteSubtitle,
        cancelText,
        confirmDeleteText,
        editConfirmTag,
        onConfirmStartEdit,
        onCancelStartEdit,
        editTitle,
        editSubtitle,
        confirmEditText,
        ...paperProps
    }) => {
        const theme = useTheme();
        const palette = chirpPalette(theme);

        return (
            <Paper {...paperProps} ref={dropdownRef} sx={{ p: 0, overflow: 'hidden' }}>
                {deleteConfirmTag ? (
                    <Box sx={{ p: 3, textAlign: 'center' }}>
                        <IconWrapper>
                            <TrashIcon />
                        </IconWrapper>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            {deleteTitle.replace('{{name}}', deleteConfirmTag.name)}
                        </Typography>
                        <Typography variant="body2" color="neutral.grey4" sx={{ mb: 3 }}>
                            {deleteSubtitle}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="secondary" size="medium" fullWidth onClick={onCancelDelete}>
                                {cancelText}
                            </Button>
                            <Button variant="primary" size="medium" fullWidth onClick={onConfirmDelete}>
                                {confirmDeleteText}
                            </Button>
                        </Stack>
                    </Box>
                ) : editConfirmTag ? (
                    <Box sx={{ p: 3, textAlign: 'center' }}>
                        <IconWrapper>
                            <EditIcon />
                        </IconWrapper>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            {editTitle.replace('{{name}}', editConfirmTag.name)}
                        </Typography>
                        <Typography variant="body2" color="neutral.grey4" sx={{ mb: 3 }}>
                            {editSubtitle}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="secondary" size="medium" fullWidth onClick={onCancelStartEdit}>
                                {cancelText}
                            </Button>
                            <Button variant="primary" size="medium" fullWidth onClick={onConfirmStartEdit}>
                                {confirmEditText}
                            </Button>
                        </Stack>
                    </Box>
                ) : (
                    <>
                        {/* Search input */}
                        <Box
                            sx={{
                                p: 1.5,
                                borderBottom: '1px solid',
                                borderColor: 'borders.primary',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 20,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    pointerEvents: 'none',
                                }}
                            >
                                <SearchIcon
                                    style={{
                                        fontSize: 20,
                                        color: palette.neutral.primary,
                                    }}
                                />
                            </Box>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder={searchPlaceholder}
                                value={searchValue}
                                onChange={(e) => onSearchChange(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                                onMouseDown={(e) => e.stopPropagation()}
                                onKeyDown={(e) => e.stopPropagation()}
                                onFocus={(e) => e.stopPropagation()}
                                autoComplete="off"
                                style={{
                                    width: '100%',
                                    padding: '8px 12px 8px 36px',
                                    border: 'none',
                                    borderRadius: '8px',
                                    backgroundColor:
                                        theme.palette.mode === CurrentTheme.Dark
                                            ? palette.neutral.grey1
                                            : palette.neutral.white,
                                    color: palette.neutral.primary,
                                    fontSize: '14px',
                                    outline: 'none',
                                    boxSizing: 'border-box',
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 1,
                                py: 0.5,
                                cursor: 'pointer',
                                '&:hover': {
                                    bgcolor: 'borders.primary',
                                },
                            }}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (!isAddingNewTag) {
                                    onStartAddNewTag();
                                }
                            }}
                        >
                            {isAddingNewTag ? (
                                <ClickAwayListener
                                    onClickAway={() => {
                                        if (newTagValue.trim()) {
                                            onCreateTag(newTagValue);
                                        } else {
                                            onCancelAddNewTag();
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            px: 3,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            flex: 1,
                                        }}
                                    >
                                        <Checkbox checked={false} disabled />
                                        <TextField
                                            inputRef={newTagInputRef}
                                            size="small"
                                            fullWidth
                                            value={newTagValue}
                                            onChange={(e) => onNewTagValueChange(e.target.value)}
                                            onKeyDown={(e) => {
                                                e.stopPropagation();

                                                if (e.key === 'Enter' && newTagValue.trim()) {
                                                    e.preventDefault();
                                                    onCreateTag(newTagValue);
                                                } else if (e.key === 'Escape') {
                                                    onCancelAddNewTag();
                                                }
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                            onMouseDown={(e) => e.stopPropagation()}
                                            onFocus={(e) => e.stopPropagation()}
                                            placeholder={enterTagNamePlaceholder}
                                            autoFocus
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: 'transparent',
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none',
                                                },
                                                '& .MuiInputBase-input': {
                                                    p: 0,
                                                },
                                            }}
                                        />
                                    </Box>
                                </ClickAwayListener>
                            ) : (
                                <Box
                                    sx={{
                                        px: 3,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        flex: 1,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onStartAddNewTag();
                                    }}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        onStartAddNewTag();
                                    }}
                                >
                                    <Checkbox checked={false} disabled />
                                    <Typography variant="body2" color="neutral.grey4">
                                        {addNewTagPlaceholder}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                        {children}
                    </>
                )}
            </Paper>
        );
    },
);

CustomPaper.displayName = 'CustomPaper';
