/* eslint-disable react-refresh/only-export-components */

// Icons kept here intentionally (not migrated to ./icons, CHIRP-3362):
//  - names collide with the public src/icons set, or
//  - the component reads the theme (useTheme/palette) and is not a pure presentational SVG.
// This barrel stays internal (not in package.json#exports).
export * from './BackIcon';

export * from './CaretDownIcon';

export * from './CaretUpIcon';

export * from './Checkmark';

export * from './ChevronDownIcon';

export * from './ChirpBigIcon';

export * from './ChirpModalIcon';

export * from './CustomDeviceIcon';

export * from './DropdownIcon';

export * from './EditIcon';

export * from './GatewayIconBig';

export * from './LoRaDeviceIcon';

export * from './NotificationIcon';

export * from './PlusIcon';

export * from './SearchIcon';

export * from './SelectIcon';

export * from './Settings';

export * from './SortIcon';

export * from './StepIcon';

export * from './ThirdPartyGatewayIcon';

export * from './ToggleSidebarIcon';

export * from './TrashIcon';

export * from './UserIcon';

export * from './WarningTriangleIcon';

// SVG-as-component exports (vite-plugin-svgr).
export { default as CheckCircleOutlinedIcon } from './check-circle-outlined-icon.svg?react';

export { default as ChirpAltIcon } from './chirp-alt-icon.svg?react';

export { default as ChirpErrorIcon } from './chirp-error-icon.svg?react';

export { default as CloseIcon } from './close-icon.svg?react';

export { default as ErrorIcon } from './error-icon.svg?react';

export { default as LogoutIcon } from './logout-icon.svg?react';

export { default as SuccessIcon } from './success-icon.svg?react';
