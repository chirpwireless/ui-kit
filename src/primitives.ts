// v1 UI primitives, exported without the global style.scss side-effect of the root entry.
// App consumers pull primitives from '@chirpwireless/ui-kit/primitives'.

export { Button } from './components/Button';

export type { ButtonProps } from './components/Button';

export { IconButton } from './components/IconButton';

export { TextField, MaskedInput } from './components/TextField';

// The bare styled MUI TextField (no FormControl wrapper), exposed so apps can extend it via
// `styled(TextFieldStyled)` for layout tweaks without re-declaring the field styling.
export { TextField as TextFieldStyled } from './components/TextField/style';

export { PhoneField } from './components/PhoneField';

export { SearchInput } from './components/SearchInput';

export { Select, InputLabel } from './components/Select';

export { Autocomplete } from './components/Autocomplete';

export { SelectIndicator } from './components/SelectIndicator';

export { Checkbox } from './components/Checkbox';

export { Toggle, MobileToggle } from './components/Toggle';

export { ThemeSwitch } from './components/ThemeSwitch';

export { MultiSelectOrCreate } from './components/MultiSelectOrCreate';

export type { MultiSelectOrCreateProps, Tag } from './components/MultiSelectOrCreate';

export { Tabs, TabBadge, TabsContainer } from './components/Tabs';
