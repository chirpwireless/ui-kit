export const getUserInitials = (name?: string): string => {
    if (!name) return '';

    const result = name.match(/\b\w/g);

    if (!result) return '';

    return result.join('.').toUpperCase();
};

export const getEmailNamespace = (email?: string): string => {
    if (!email) return '';

    const trimmed = email.trim();

    if (!trimmed) return '';

    const atIndex = trimmed.indexOf('@');

    return (atIndex >= 0 ? trimmed.slice(0, atIndex) : trimmed).trim();
};

export interface DisplayNameInput {
    firstName?: string;
    lastName?: string;
    email?: string;
}

export const getDisplayName = (data: DisplayNameInput = {}, fallback = 'User'): string => {
    const firstName = data.firstName?.trim() ?? '';
    const lastName = data.lastName?.trim() ?? '';
    const initials = firstName || lastName ? getUserInitials(`${firstName} ${lastName}`) : '';

    if (initials) return initials;

    const namespace = getEmailNamespace(data.email);

    if (namespace) return namespace;

    return data.email?.trim() || fallback;
};
