import { CurrentTheme } from '@chirp/ui/styles/constants';
import { PaletteOptions, ThemeOptions } from '@mui/material/styles';

export const referenceLightThemePalette: Omit<PaletteOptions, 'base' | 'darkening' | 'border' | 'accent' | 'shadow'> = {
    primary: {
        main: 'rgba(255, 77, 20, 1)', // #ff4d14
        light: 'rgba(0, 0, 0, 1)', // #000000
        dark: 'rgba(99, 99, 99, 1)', // #636363
        contrastText: 'rgba(16, 16, 16, 1)', // #101010
    },
    secondary: {
        main: 'rgba(255, 255, 255, 1)', // button text
        contrastText: 'rgba(0, 0, 0, 1)', // '#000',
    },
    primaryColors: {
        accent: 'rgba(255, 77, 20, 1)', // #ff4d14
        accentHover: 'rgba(231, 68, 15, 1)', // #e7440f
    },
    text: {
        primary: 'rgba(16, 16, 16, 1)', // #141414
        secondary: 'rgba(154, 154, 154, 1)', // #9a9a9a
    },
    darkShades: {
        primary: 'rgba(244, 244, 244, 1)', // #F4F4F4
        secondary: 'rgba(255, 255, 255, 1)', // #ffffff
        ternary: 'rgba(237, 237, 237, 1)', // #dcdcdc
        quaternary: 'rgba(212, 212, 212, 1)', // #cacaca
        fifth: 'rgba(229, 229, 229, 1)', // #e5e5e5
    },
    lightShades: {
        primary: 'rgb(0, 0, 0)', // #000000
        secondary: 'rgba(23, 23, 23, 1)', // #141414
        ternary: 'rgba(69, 69, 69, 1)', // #454545
        quaternary: 'rgba(154, 154, 154, 1)', // #9a9a9a
    },
    borders: {
        primary: 'rgba(186, 186, 186, 0.1)', // #bababa1a
        secondary: 'rgba(186, 186, 186, 0.3)', // #bababa4d4
        ternary: 'rgba(197, 197, 197, 1)', // #bbbbbb
    },
    alerts: {
        success: 'rgba(0,185,0,1)', // #55e050
        warning: 'rgba(226, 204, 0, 1)', // #E2CC00
        alert: 'rgba(255, 73, 73, 1)', // #ff4949
    },
    additionalColors: {
        buttonSecondary: 'rgba(255, 77, 20, 0.2)', // #ff4d1433
        buttonSecondaryHv: 'rgba(255, 77, 20, 0.3)', // #ff4d144d
        blue: 'rgba(95, 117, 255, 1)', // #5f75ff
        lightYellow: 'rgba(253, 255, 132, 1)', // #fdff84
        yellow: 'rgba(255, 210, 98, 1)', // #ffd262
        lightBlue: 'rgba(132, 237, 255, 1)', // #84edff
        air: 'rgba(200, 247, 255, 1)', // #c8f7ff
        purple: 'rgba(204, 166, 255, 1)', // #cca6ff
        pink: 'rgba(255, 166, 227, 1)', // #ffa6e3
        mutedGreen: 'rgba(80, 224, 147, 0.15)', // #50e09326
    },
    widgets: {
        text: 'rgba(16, 16, 16, 1)', // #101010
        values: {
            min: 'rgba(95, 117, 255, 1)', // #5F75FF
            avg: 'rgba(182, 133, 151, 1)', // #B68597
            max: 'rgba(219, 55, 55, 1)', // #DB3737
        },
        gradientPoints: {
            min: 'rgba(95, 117, 255, 1)', // #5F75FF
            avg: 'rgba(243, 233, 207, 1)', // #F3E9CF
            max: 'rgba(219, 55, 55, 1)', // #DB3737
        },
    },
    grey: {
        50: '#000000',
        100: '#060606',
        200: '#0A0909',
        300: '#0C0C0C',
        400: '#1D1D1C',
        500: '#3A3938',
        600: '#4D4C4A',
        700: '#868583',
        800: '#ADABA6',
        900: '#D5D4CF',
    },
    background: {
        default: 'rgba(255, 255, 255, 1)', // #ffffff
        paper: 'rgba(232,232,232 ,0.8)', // #e8e8e8cc
    },
    info: {
        main: 'rgba(244, 244, 244, 1)', // #efefef
        light: 'rgba(255, 255, 255, 1)', // #ffffff
        dark: 'rgba(255, 255, 255, 1)', // #ffffff
    },
};

export const lightTheme: ThemeOptions = {
    palette: {
        ...referenceLightThemePalette,
        mode: CurrentTheme.Light,
        // REFERENCE COLORS
        info: {
            main: 'rgba(244, 244, 244, 1)', // #efefef
            light: 'rgba(255, 255, 255, 1)', // #ffffff
            dark: 'rgba(255, 255, 255, 1)', // #ffffff
        },

        // FLEET COLORS
        // primary: {
        //     main: '#FF4D14',
        //     light: '#ffffff',
        //     dark: '#101010',
        // },
        // info: {
        //     main: '#FF4D14',
        // },
        shadow: {
            primary: '0px 3px 40px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px 1px rgba(0, 0, 0, 0.14)',
        },
        background: {
            // нижние два цвета будут использоваться из референса
            default: 'rgba(255, 255, 255, 1)', // #ffffff
            paper: 'rgba(232,232,232 ,0.8)', // #e8e8e8cc
            // default: '#F4F4F4',
            // paper: '#E5E5E5',
            primary: referenceLightThemePalette.darkShades.primary, //'#F4F4F4',
            secondary: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            tertiary: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            fifth: referenceLightThemePalette.darkShades.fifth, // #E5E5E5'
            fifthInput: referenceLightThemePalette.darkShades.primary, //'#F4F4F4',

            // new colors
            background1: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            background2: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            background3: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            background4: '#FBFBFB',
            background5: referenceLightThemePalette.darkShades.primary, //'#F4F4F4',
            background6: referenceLightThemePalette.darkShades.primary, //'#F4F4F4',
            background7: referenceLightThemePalette.darkShades.primary, //'#F4F4F4',
            background8: '#E4E4E4',
            background9: '#E4E4E4',
            background10: '#E4E4E4',
            background11: '#FFFFFF80',
            background12: '#A6A6A680',
            background13: '#FF4D140D',
            background14: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            background15: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            background16: referenceLightThemePalette.darkShades.primary, //'#F4F4F4',
        },
        primaryColors: {
            ...referenceLightThemePalette.primaryColors,
            primary: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            secondary: '#EBEBEB',
            tertiary: '#BABABA',
            quaternary: referenceLightThemePalette.darkShades.primary, //'#F4F4F4',
            fifth: '#',
        },
        accent: {
            accent: referenceLightThemePalette.primaryColors.accent, //'#FF4D14',
            accent10: '#FF4D141A',
            accentHover: referenceLightThemePalette.primaryColors.accentHover, // '#E7440F',
        },
        border: {
            primary: referenceLightThemePalette.borders.primary, //  #bababa1a
            secondary: referenceLightThemePalette.borders.secondary, //#bababa4d
            tertiaryInput: '#10101026',

            // new colors
            border1: '#00000014',
            border2: '#00000014',
            border3: '#0000001A',
            border4: '#FFFFFF33',
            border5: '#E4E4E4',
            input: '#5C5C5C24',
            input2: '#5C5C5C3D',
            input3: '#5C5C5C3D',
            input4Error: referenceLightThemePalette.alerts.alert, //'#FF4949',
        },
        text: {
            primary: referenceLightThemePalette.widgets.text, //'#101010',
            secondary: '#353535',
            tertiary: '#808080',
            quaternary: '#A2A2A2',
            fifth: referenceLightThemePalette.widgets.text, //'#101010',

            // new colors
            text1: referenceLightThemePalette.grey?.[50], //'#000000',
            text2: referenceLightThemePalette.grey?.[50], //'#000000',
            text3: referenceLightThemePalette.grey?.[50], //'#000000',
            text4: '#5C5C5C',
            text5: '#5C5C5C',
            text6: '#5C5C5C',
            text7: '#5C5C5C',
            text8: '#A6A6A6',
            search: '#A6A6A6',
            titleInput: '#656565',
            textInput40: '#5C5C5C66',
            textInput60: '#5C5C5C99',
            textInput80: '#5C5C5CCC',
            textInput802: '#5C5C5CCC',
        },
        alerts: {
            ...referenceLightThemePalette.alerts,
            green: referenceLightThemePalette.alerts.success, // '#55E050',
            yellow: referenceLightThemePalette.alerts.warning, // '#FFF614',
            red: referenceLightThemePalette.alerts.alert, //'#FF4949',
        },

        // new colors:
        darkening: {
            darkening: '#A6A6A633',
        },
        base: {
            color1: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            color2: referenceLightThemePalette.darkShades.secondary, // #FFFFFF
            color3: '#A6A6A6',
            color4: '#232323',
            color5: '#171717',
            color6: referenceLightThemePalette.primaryColors.accent, //'#FF4D14',
            hover: referenceLightThemePalette.primaryColors.accentHover, //'#E7440F',
            color61: '#FF4D141A',
            color62: '#FF4D140D',
            color63: referenceLightThemePalette.additionalColors.buttonSecondary, //'#FF4D1433',
            color7: referenceLightThemePalette.alerts.alert, //'#FF4949',
            color8: referenceLightThemePalette.grey?.[50] || '#000000', //'#000000',
            color21: '#FFF614',
            color9: '#01BE11',
            color10: '#D9D9D9',
            color11: '#586DEC',
            color12: '#7AD9E9',
            color16: '#85EDFF',
            color17: '#50E0DB',
            color22: '#AB6CFF',
            color19: referenceLightThemePalette.additionalColors.purple, //'#CCA6FF',
            color15: '#FFA6E3',
            color13: '#E85A2D',
            color14: '#FFB114',
            color18: '#FFE314',
            color20: '#CCFF5F',
        },
    },
};
