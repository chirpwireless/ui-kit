export declare const getUserInitials: (name?: string) => string;
export declare const getEmailNamespace: (email?: string) => string;
export interface DisplayNameInput {
    firstName?: string;
    lastName?: string;
    email?: string;
}
export declare const getDisplayName: (data?: DisplayNameInput, fallback?: string) => string;
