import { CurrentTheme } from '@chirp/ui/styles/constants';
import { Slider as MuiSlider, styled } from '@mui/material';

export const Slider = styled(MuiSlider)(({ theme }) => ({
    '--gradient': `
    linear-gradient(90deg,
      red 0%,
      yellow 49%,
      green 100%)`,
    // linear-gradient(90deg,
    //   ${theme.palette.widgets.gradientPoints.min} 0%,
    //   ${theme.palette.widgets.gradientPoints.avg} 49%,
    //   ${theme.palette.widgets.gradientPoints.max} 100%)`,
    '--border-color': theme.palette.mode === CurrentTheme.Light ? '#767676' : undefined,

    height: '6px',
    padding: 0,

    '& .MuiSlider-rail': {
        // eslint-disable-next-line max-len
        background: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIHZpZXdCb3g9IjAgMCA4IDQiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNLTguNzQyMjhlLTA4IDJMMS44MDc2NyAxLjgwNzY3TDIgLTguNzQyMjhlLTA4TDIuMTkyMzMgMS44MDc2N0w0IDJMMi4xOTIzMyAyLjE5MjMzTDIgNEwxLjgwNzY3IDIuMTkyMzNMLTguNzQyMjhlLTA4IDJaIiBmaWxsPSIjMTAxMDEwIi8+Cjwvc3ZnPg==),
      var(--gradient)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
        border: '1px solid var(--border-color, transparent)',
        opacity: 1,
    },

    '& .MuiSlider-thumb': {
        width: '10px',
        height: '16px',
        borderRadius: '2px',
        border: '1px solid var(--border-color, black)',
    },
}));
