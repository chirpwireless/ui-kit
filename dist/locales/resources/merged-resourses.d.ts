import { Resource } from 'i18next';
import { default as uiKit } from './ui-kit.json';
export type MergedResources = {
    [key in keyof typeof uiKitModule]: (typeof uiKitModule)[key]['en'];
};
export { uiKit as uiKitLocaleModule };
export declare const uiKitModule: {
    uiKit: {
        en: {
            Photo: string;
            widgets: {
                "No data": string;
                "Current value": string;
                "Max value": string;
                "Min value": string;
                average: string;
                current: string;
                normal: string;
                Max: string;
                Min: string;
                "Last update": string;
                "Show graph": string;
                "Units of measurement": string;
                "Set the optimal value range": string;
                "Online data": string;
                "Data for period": string;
                Reset: string;
                All: string;
                On: string;
                Off: string;
                from: string;
                to: string;
                Saved: string;
                Save: string;
                max: string;
                min: string;
                avg: string;
                L: string;
                Fuel: string;
            };
            colorPicker: {
                Color: string;
            };
            logout: {
                Logout: string;
                modal: {
                    "Are you sure that you want to logout?": string;
                };
            };
            map: {
                "Your location": string;
                "GPS tracker": string;
                "Search location": string;
                Search: string;
                Line: string;
                Circle: string;
                Polygon: string;
                ToggleAttribution: string;
                MapFeedback: string;
                Enter: string;
                Exit: string;
                FindMyLocation: string;
                LocationNotAvailable: string;
                Title: string;
                ResetBearing: string;
                ZoomIn: string;
                ZoomOut: string;
                CtrlMessage: string;
                CmdMessage: string;
                Message: string;
            };
            modal: {
                Cancel: string;
                Confirm: string;
            };
            DropdownMultiselect: {
                "Search by name": string;
            };
            SearchInput: {
                "Search location": string;
                "Search by name": string;
            };
            RangePicker: {
                "Choose date range": string;
                "Start date": string;
                "End date": string;
                Input: string;
                Label: string;
                "Clear data range": string;
                "Apply changes": string;
                "Previous Month": string;
                "Next Month": string;
                today: string;
                "last week": string;
                "last month": string;
                "last 2 months": string;
            };
            UserPopup: {
                "Connect your wallet": string;
                themeSwith: {
                    Dark: string;
                    Light: string;
                };
            };
            PhoneField: {
                countries: {
                    USA: string;
                    Russia: string;
                    Germany: string;
                    Portugal: string;
                    Spain: string;
                    France: string;
                };
            };
            Search: string;
            "Enter tag name here to add new tag...": string;
            "Enter tag name": string;
            "Select tags": string;
            "Are you sure you want to delete \"{{name}}\" tag?": string;
            "After you delete this tag, the devices it's assigned to will no longer use it.": string;
            Cancel: string;
            Confirm: string;
            "Yes, delete": string;
            "Are you sure you want to edit \"{{name}}\" tag?": string;
            "After you edit this tag, the devices it is assigned to will use the updated name.": string;
            "Yes, edit": string;
        };
        fr: {
            Photo: string;
            widgets: {
                "No data": string;
                "Current value": string;
                "Max value": string;
                "Min value": string;
                average: string;
                current: string;
                normal: string;
                Max: string;
                Min: string;
                "Last update": string;
                "Show graph": string;
                "Units of measurement": string;
                "Set the optimal value range": string;
                "Online data": string;
                "Data for period": string;
                Reset: string;
                All: string;
                On: string;
                Off: string;
                from: string;
                to: string;
                Saved: string;
                Save: string;
                max: string;
                min: string;
                avg: string;
                L: string;
                Fuel: string;
            };
            colorPicker: {
                Color: string;
            };
            logout: {
                Logout: string;
                modal: {
                    "Are you sure that you want to logout?": string;
                };
            };
            map: {
                "Your location": string;
                "GPS tracker": string;
                "Search location": string;
                Search: string;
                Line: string;
                Circle: string;
                Polygon: string;
                ToggleAttribution: string;
                MapFeedback: string;
                Enter: string;
                Exit: string;
                FindMyLocation: string;
                LocationNotAvailable: string;
                Title: string;
                ResetBearing: string;
                ZoomIn: string;
                ZoomOut: string;
                CtrlMessage: string;
                CmdMessage: string;
                Message: string;
            };
            modal: {
                Cancel: string;
                Confirm: string;
            };
            DropdownMultiselect: {
                "Search by name": string;
            };
            SearchInput: {
                "Search location": string;
                "Search by name": string;
            };
            RangePicker: {
                "Choose date range": string;
                "Start date": string;
                "End date": string;
                Input: string;
                Label: string;
                "Clear data range": string;
                "Apply changes": string;
                "Previous Month": string;
                "Next Month": string;
                today: string;
                "last week": string;
                "last month": string;
                "last 2 months": string;
            };
            UserPopup: {
                "Connect your wallet": string;
                themeSwith: {
                    Dark: string;
                    Light: string;
                };
            };
            PhoneField: {
                countries: {
                    USA: string;
                    Russia: string;
                    Germany: string;
                    Portugal: string;
                    Spain: string;
                    France: string;
                };
            };
            Search: string;
            "Enter tag name here to add new tag...": string;
            "Enter tag name": string;
            "Select tags": string;
            "Are you sure you want to delete \"{{name}}\" tag?": string;
            "After you delete this tag, the devices it's assigned to will no longer use it.": string;
            Cancel: string;
            Confirm: string;
            "Yes, delete": string;
            "Are you sure you want to edit \"{{name}}\" tag?": string;
            "After you edit this tag, the devices it is assigned to will use the updated name.": string;
            "Yes, edit": string;
        };
        de: {
            Photo: string;
            widgets: {
                "No data": string;
                "Current value": string;
                "Max value": string;
                "Min value": string;
                average: string;
                current: string;
                normal: string;
                Max: string;
                Min: string;
                "Last update": string;
                "Show graph": string;
                "Units of measurement": string;
                "Set the optimal value range": string;
                "Online data": string;
                "Data for period": string;
                Reset: string;
                All: string;
                On: string;
                Off: string;
                from: string;
                to: string;
                Saved: string;
                Save: string;
                max: string;
                min: string;
                avg: string;
                L: string;
                Fuel: string;
            };
            colorPicker: {
                Color: string;
            };
            logout: {
                Logout: string;
                modal: {
                    "Are you sure that you want to logout?": string;
                };
            };
            map: {
                "Your location": string;
                "GPS tracker": string;
                "Search location": string;
                Search: string;
                Line: string;
                Circle: string;
                Polygon: string;
                ToggleAttribution: string;
                MapFeedback: string;
                Enter: string;
                Exit: string;
                FindMyLocation: string;
                LocationNotAvailable: string;
                Title: string;
                ResetBearing: string;
                ZoomIn: string;
                ZoomOut: string;
                CtrlMessage: string;
                CmdMessage: string;
                Message: string;
            };
            modal: {
                Cancel: string;
                Confirm: string;
            };
            DropdownMultiselect: {
                "Search by name": string;
            };
            SearchInput: {
                "Search location": string;
                "Search by name": string;
            };
            RangePicker: {
                "Choose date range": string;
                "Start date": string;
                "End date": string;
                Input: string;
                Label: string;
                "Clear data range": string;
                "Apply changes": string;
                "Previous Month": string;
                "Next Month": string;
                today: string;
                "last week": string;
                "last month": string;
                "last 2 months": string;
            };
            UserPopup: {
                "Connect your wallet": string;
                themeSwith: {
                    Dark: string;
                    Light: string;
                };
            };
            PhoneField: {
                countries: {
                    USA: string;
                    Russia: string;
                    Germany: string;
                    Portugal: string;
                    Spain: string;
                    France: string;
                };
            };
            Search: string;
            "Enter tag name here to add new tag...": string;
            "Enter tag name": string;
            "Select tags": string;
            "Are you sure you want to delete \"{{name}}\" tag?": string;
            "After you delete this tag, the devices it's assigned to will no longer use it.": string;
            Cancel: string;
            Confirm: string;
            "Yes, delete": string;
            "Are you sure you want to edit \"{{name}}\" tag?": string;
            "After you edit this tag, the devices it is assigned to will use the updated name.": string;
            "Yes, edit": string;
        };
        es: {
            Photo: string;
            widgets: {
                "No data": string;
                "Current value": string;
                "Max value": string;
                "Min value": string;
                average: string;
                current: string;
                normal: string;
                Max: string;
                Min: string;
                "Last update": string;
                "Show graph": string;
                "Units of measurement": string;
                "Set the optimal value range": string;
                "Online data": string;
                "Data for period": string;
                Reset: string;
                All: string;
                ToggleAttribution: string;
                MapFeedback: string;
                Enter: string;
                Exit: string;
                FindMyLocation: string;
                LocationNotAvailable: string;
                Title: string;
                ResetBearing: string;
                ZoomIn: string;
                ZoomOut: string;
                CtrlMessage: string;
                CmdMessage: string;
                Message: string;
                On: string;
                Off: string;
                from: string;
                to: string;
                Saved: string;
                Save: string;
                max: string;
                min: string;
                avg: string;
                L: string;
                Fuel: string;
            };
            colorPicker: {
                Color: string;
            };
            logout: {
                Logout: string;
                modal: {
                    "Are you sure that you want to logout?": string;
                };
            };
            map: {
                "Your location": string;
                "GPS tracker": string;
                "Search location": string;
                Search: string;
                Line: string;
                Circle: string;
                Polygon: string;
            };
            modal: {
                Cancel: string;
                Confirm: string;
            };
            DropdownMultiselect: {
                "Search by name": string;
            };
            SearchInput: {
                "Search location": string;
                "Search by name": string;
            };
            RangePicker: {
                "Choose date range": string;
                "Start date": string;
                "End date": string;
                Input: string;
                Label: string;
                "Clear data range": string;
                "Apply changes": string;
                "Previous Month": string;
                "Next Month": string;
                today: string;
                "last week": string;
                "last month": string;
                "last 2 months": string;
            };
            UserPopup: {
                "Connect your wallet": string;
                themeSwith: {
                    Dark: string;
                    Light: string;
                };
            };
            PhoneField: {
                countries: {
                    USA: string;
                    Russia: string;
                    Germany: string;
                    Portugal: string;
                    Spain: string;
                    France: string;
                };
            };
            Search: string;
            "Enter tag name here to add new tag...": string;
            "Enter tag name": string;
            "Select tags": string;
            "Are you sure you want to delete \"{{name}}\" tag?": string;
            "After you delete this tag, the devices it's assigned to will no longer use it.": string;
            Cancel: string;
            Confirm: string;
            "Yes, delete": string;
            "Are you sure you want to edit \"{{name}}\" tag?": string;
            "After you edit this tag, the devices it is assigned to will use the updated name.": string;
            "Yes, edit": string;
        };
        ru: {
            Photo: string;
            widgets: {
                "No data": string;
                "Current value": string;
                "Max value": string;
                "Min value": string;
                average: string;
                current: string;
                normal: string;
                Max: string;
                Min: string;
                "Last update": string;
                "Show graph": string;
                "Units of measurement": string;
                "Set the optimal value range": string;
                "Online data": string;
                "Data for period": string;
                Reset: string;
                All: string;
                On: string;
                Off: string;
                from: string;
                to: string;
                Saved: string;
                Save: string;
                max: string;
                min: string;
                avg: string;
                L: string;
                Fuel: string;
            };
            colorPicker: {
                Color: string;
            };
            logout: {
                Logout: string;
                modal: {
                    "Are you sure that you want to logout?": string;
                };
            };
            map: {
                "Your location": string;
                "GPS tracker": string;
                "Search location": string;
                Search: string;
                Line: string;
                Circle: string;
                Polygon: string;
                ToggleAttribution: string;
                MapFeedback: string;
                Enter: string;
                Exit: string;
                FindMyLocation: string;
                LocationNotAvailable: string;
                Title: string;
                ResetBearing: string;
                ZoomIn: string;
                ZoomOut: string;
                CtrlMessage: string;
                CmdMessage: string;
                Message: string;
            };
            modal: {
                Cancel: string;
                Confirm: string;
            };
            DropdownMultiselect: {
                "Search by name": string;
            };
            SearchInput: {
                "Search location": string;
                "Search by name": string;
            };
            RangePicker: {
                "Choose date range": string;
                "Start date": string;
                "End date": string;
                Input: string;
                Label: string;
                "Clear data range": string;
                "Apply changes": string;
                "Previous Month": string;
                "Next Month": string;
                today: string;
                "last week": string;
                "last month": string;
                "last 2 months": string;
            };
            UserPopup: {
                "Connect your wallet": string;
                themeSwith: {
                    Dark: string;
                    Light: string;
                };
            };
            PhoneField: {
                countries: {
                    USA: string;
                    Russia: string;
                    Germany: string;
                    Portugal: string;
                    Spain: string;
                    France: string;
                };
            };
            Search: string;
            "Enter tag name here to add new tag...": string;
            "Enter tag name": string;
            "Select tags": string;
            "Are you sure you want to delete \"{{name}}\" tag?": string;
            "After you delete this tag, the devices it's assigned to will no longer use it.": string;
            Cancel: string;
            Confirm: string;
            "Yes, delete": string;
            "Are you sure you want to edit \"{{name}}\" tag?": string;
            "After you edit this tag, the devices it is assigned to will use the updated name.": string;
            "Yes, edit": string;
        };
    };
};
export declare const mergedResources: Record<string, Resource>;
