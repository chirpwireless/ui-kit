import { Box, Stack, useTheme } from '@mui/material';
import { Serie } from '@nivo/line';
import { clamp } from 'lodash';
import { useMemo, useState } from 'react';

import { CurrentValue } from '../current-value';
import { calculateValues } from '../helpers/index';
import { SwitchViewButton } from '../switch-view-button';
import { AttributeConfig, Settings as TSettings, Timequant, WidgetTypes } from '../types';
import { Legend } from './components/legend';
import { LoadingState } from './components/loading-state';
import { Settings } from './components/settings';
import { graphTimeFormat } from './helpers';
import { LinearGradientHelper } from './helpers/linear-gradient-helper';
import { ICONS_DICTIONARY } from './icons/dictionary';
import * as S from './style';
import { useWidgetSettings } from './use-widget-settings';
import { CurrentTheme } from '@chirp/ui/styles/constants';
import { FlatLinearGraph } from '../flat-linear-graph';
import { ProgressBar } from '../progress-bar/progress-bar';
import { FooterGradient } from '../footer-gradient/footer-gradient';
import { Typography } from '../../typogrpahy';
import { useTranslation } from 'react-i18next';

type WidgetBaseProps = {
    id: string;
    attributeName: string;
    chartData: Serie[] | null;
    timequant: Timequant;
    postfix: string;
    date: string;
    isLoading: boolean;
    isError: boolean;
    isInteractive?: boolean;
    config: AttributeConfig;
    period?: string;
    onUnitsChange?: (shouldBeConverted: boolean) => void;
    switchView?(attributeName: string): void;
    value: number | string | boolean | undefined;
    onSettingsChange?: (settings: TSettings) => void;
};

export const WidgetBase: React.FC<WidgetBaseProps> = (props) => {
    const {
        id,
        timequant,
        date,
        isLoading,
        isError,
        config,
        chartData,
        isInteractive,
        attributeName,
        value,
        postfix,
        period,
        onUnitsChange,
        switchView,
        onSettingsChange,
    } = props;

    const { t } = useTranslation('uiKit', { keyPrefix: 'widgets' });

    const [isHovered, setIsHovered] = useState(false);

    const { palette } = useTheme();

    const {
        showGraph,
        unitsOfMeasurement,
        showAlert,
        toggleAlertVisibility,
        toggleGraphVisibility,
        setUnitsOfMeasurement,
        setValueBoundaries,
        isBoundariesLoading,
    } = useWidgetSettings(id, attributeName, config, onSettingsChange);

    const title = config.title || attributeName;

    const withSensor = Boolean(config.sensor_type) && config.sensor_type !== 'none';

    const isAlert = showAlert && config.type === WidgetTypes.Boolean && value === true;
    const themeColor = palette.mode === CurrentTheme.Dark ? config.color : config.color;
    const color = isAlert ? config.alertColor : themeColor;

    const isGraphicWidget = config.type === WidgetTypes.Graphic;
    const isGraphView = isGraphicWidget && showGraph;

    const gradient = useMemo(
        () =>
            new LinearGradientHelper([
                [palette.additionalColors.blue, 0],
                [palette.additionalColors.yellow, 0.49],
                [palette.alerts.alert, 1],
            ]),
        [palette],
    );

    const current = (typeof value === 'number' || typeof value === 'string') && !isNaN(+value) ? +value : 0;
    const calculatedValues = useMemo(() => calculateValues(chartData), [chartData]);
    const { min, max, avg } = calculatedValues;

    const currentColor = useMemo(() => {
        if (min === null || max === null) {
            return '';
        }

        const distance = max - min;
        const percent = ((current - min) * 100) / distance;

        return gradient.getColor(clamp(percent || 0, 0, 100)) ?? '';
    }, [min, max, current, gradient]);

    const handleMouseEnter = () => {
        if (!isInteractive) return;
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (!isInteractive) return;
        setIsHovered(false);
    };

    if (isLoading)
        return <LoadingState withSensor={withSensor} showGraph={showGraph} isGraphicWidget={isGraphicWidget} />;

    if (isError) return null;

    return (
        <S.Card
            sx={{ borderColor: isAlert ? color : undefined }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Stack px="20px" direction="row" alignItems="flex-start" justifyContent="space-between">
                <Stack maxWidth="50%" minHeight="40px" justifyContent="space-around">
                    <Stack alignItems="center" direction="row" spacing="8px">
                        {config.icon &&
                            config.icon !== 'none' &&
                            ICONS_DICTIONARY[config.icon as keyof typeof ICONS_DICTIONARY]}
                        <Typography
                            noWrap
                            title={title}
                            variant="caption12"
                            textTransform="capitalize"
                            color="text.text4"
                        >
                            {title}
                        </Typography>
                    </Stack>
                    {date && (
                        <Box>
                            <Typography component="span" variant="overline" color="text.text8">
                                {t('Last update')}
                            </Typography>

                            <Typography component="span" variant="caption12" ml={1} color="text.text4">
                                {date}
                            </Typography>
                        </Box>
                    )}
                </Stack>
                <Stack flexDirection="row" alignItems="center" gap="10px">
                    {isGraphicWidget && (
                        <Settings
                            units={unitsOfMeasurement}
                            showGraph={showGraph}
                            config={config}
                            showAlert={showAlert}
                            isBoundariesLoading={isBoundariesLoading}
                            toggleAlertVisibility={toggleAlertVisibility}
                            toggleGraphVisibility={toggleGraphVisibility}
                            setUnitsOfMeasurement={setUnitsOfMeasurement}
                            onUnitsChange={onUnitsChange}
                            setValueBoundaries={setValueBoundaries}
                        />
                    )}
                    {switchView && (
                        <SwitchViewButton
                            attributeName={attributeName}
                            isAccent
                            // disabled={isSettingsUpdateLoading}
                            switchView={switchView}
                        />
                    )}
                </Stack>
            </Stack>
            <Box sx={{ position: 'absolute', top: '44px', right: '20px' }}>
                {isGraphView && <Legend color={color} />}
            </Box>
            <Stack
                direction="row"
                justifyContent={isGraphicWidget ? 'space-between' : 'center'}
                alignItems="center"
                flexGrow={isGraphicWidget ? 'unset' : 1}
                minHeight="80px"
                px="20px"
            >
                <CurrentValue
                    value={value}
                    postfix={postfix}
                    color={isGraphicWidget && !showGraph ? currentColor : color}
                />
            </Stack>
            {isGraphicWidget && !showGraph && (
                <Box width="100%" paddingX="20px">
                    {period && (
                        <Typography mb="4px" fontSize="10px" lineHeight="16px" color="text.text8">
                            {period}
                        </Typography>
                    )}
                    <ProgressBar
                        current={current}
                        min={min === null || min > current ? current : min}
                        max={max === null || max < current ? current : max}
                        avg={avg ?? current}
                        gradientColors={gradient.getGradientColors()}
                        currentColor={currentColor}
                        postfix={''}
                    />
                </Box>
            )}
            {isGraphView ? (
                <Box height="50px" flexGrow={1} maxHeight={'50%'}>
                    <FlatLinearGraph
                        timeFormat={graphTimeFormat[timequant]}
                        chartData={chartData}
                        calculatedValues={calculatedValues}
                        color={isHovered || isAlert ? color : palette.text.text8}
                        withAxis
                        isInteractive={isInteractive}
                        config={config}
                        postfix={postfix}
                        curve={config.display_value === 'delta' ? 'step' : 'linear'}
                        timequant={timequant}
                    />
                </Box>
            ) : (
                <FooterGradient />
            )}
        </S.Card>
    );
};
