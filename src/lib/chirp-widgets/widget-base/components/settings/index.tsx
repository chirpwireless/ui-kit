import { ClickAwayListener, Stack } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { converter } from '@chirp/ui/lib/chirp-widgets/graphic-widget/converter';
import { AttributeConfig, ValueBoundaries } from '@chirp/ui/lib/chirp-widgets/types';
import * as S from '../../style';
import { ValueBoundariesForm } from './value-boundaries-form';
import { ManageIcon } from '@chirp/ui/assets/icons';
import { WidgetToggle } from '@chirp/ui/lib/widget-toggle';
import { FilterItem } from '@chirp/ui/lib/filter-item';
import { IconButton } from '@chirp/ui/lib/icon-button';
import { Tooltip } from '@chirp/ui/lib/tooltip';
import { Typography } from '@chirp/ui/lib/typogrpahy';
import { useTranslation } from 'react-i18next';

type SettingsProps = {
    units: string;
    config: AttributeConfig;
    showGraph: boolean;
    showAlert: boolean;
    isBoundariesLoading: boolean;
    setValueBoundaries: (boundaries: ValueBoundaries) => void;
    setUnitsOfMeasurement: (value: string) => void;
    toggleAlertVisibility: () => void;
    toggleGraphVisibility?: () => void;
    onUnitsChange?: (shouldBeConverted: boolean) => void;
};

export const Settings: FC<SettingsProps> = ({
    showGraph,
    showAlert,
    isBoundariesLoading,
    units,
    config,
    setValueBoundaries,
    setUnitsOfMeasurement,
    toggleAlertVisibility,
    toggleGraphVisibility,
    onUnitsChange,
}) => {
    const { t } = useTranslation('uiKit', { keyPrefix: 'widgets' });
    const [isOpen, setIsOpen] = useState(false);
    const unitsConverter = converter[config.units];

    const handleTooltipClose = () => {
        setIsOpen(false);
    };

    const handleTooltipOpen = () => {
        setIsOpen(true);
    };

    const handleUnitsChange = (newUnits: string) => {
        if (onUnitsChange) onUnitsChange(unitsConverter && newUnits !== config.units);

        setUnitsOfMeasurement(newUnits);
    };

    useEffect(() => {
        if (onUnitsChange) onUnitsChange(unitsConverter && units !== config.units);
    }, [config.units, onUnitsChange, units, unitsConverter]);

    return (
        <Tooltip
            disableHoverListener
            open={isOpen}
            placement="bottom-end"
            sx={{ display: 'inline-flex' }}
            title={
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Stack minWidth="240px" py="10px">
                        {unitsConverter && (
                            <S.SettingsItem>
                                <Typography color="text.text3" variant="caption12">
                                    {t('Units of measurement')}
                                </Typography>
                                <S.UnitsOfMeasurementWrapper
                                    direction="row"
                                    spacing="4px"
                                    alignItems="center"
                                    ml="16px"
                                >
                                    <FilterItem
                                        onChange={() => handleUnitsChange(config.units)}
                                        label={config.units}
                                        checked={units === config.units}
                                        variant="primary"
                                    />
                                    <FilterItem
                                        checked={units === unitsConverter.alternativeUnits}
                                        onChange={() => handleUnitsChange(unitsConverter.alternativeUnits)}
                                        label={unitsConverter.alternativeUnits}
                                        variant="primary"
                                    />
                                </S.UnitsOfMeasurementWrapper>
                            </S.SettingsItem>
                        )}

                        {toggleGraphVisibility && (
                            <S.SettingsItem>
                                <Typography color="text.text3" variant="caption12">
                                    {t('Show graph')}
                                </Typography>
                                <WidgetToggle
                                    name="show-graph"
                                    label={showGraph ? t('On') : t('Off')}
                                    checked={showGraph}
                                    isLoading={false}
                                    onChange={toggleGraphVisibility}
                                />
                            </S.SettingsItem>
                        )}

                        <S.SettingsItem>
                            <ValueBoundariesForm
                                isLoading={isBoundariesLoading}
                                valueFrom={config.valueFrom}
                                valueTo={config.valueTo}
                                onSave={setValueBoundaries}
                                units={units}
                            />
                        </S.SettingsItem>

                        {config.type === 'boolean' && (
                            <S.SettingsItem>
                                <Typography color="text.text3" variant="caption12">
                                    Show alert
                                </Typography>
                                <WidgetToggle
                                    name="show-alert"
                                    label={showAlert ? t('On') : t('Off')}
                                    checked={showAlert}
                                    isLoading={false}
                                    onChange={toggleAlertVisibility}
                                />
                            </S.SettingsItem>
                        )}
                    </Stack>
                </ClickAwayListener>
            }
        >
            <IconButton
                size="small"
                variant="gray"
                sx={{
                    alignSelf: 'flex-start',
                    zIndex: 10,
                    '&:hover': { color: 'text.text4' },
                    padding: 0,
                }}
                onClick={handleTooltipOpen}
            >
                <ManageIcon />
            </IconButton>
        </Tooltip>
    );
};
