import { SliceTooltipProps } from '@nivo/line';
import { TableTooltip } from '@nivo/tooltip';
import moment from 'moment';
import { AttributeConfig, WidgetTypes } from '@chirp/ui/lib/chirp-widgets/types';
import { Typography } from '@chirp/ui/lib/typogrpahy';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Tooltip = ({
    slice,
    config,
    postfix,
    minY,
    maxY,
}: SliceTooltipProps & { config?: AttributeConfig; postfix?: string; minY: number | null; maxY: number | null }) => {
    const theme = useTheme();
    const { t } = useTranslation('uiKit', { keyPrefix: 'widgets' });

    const dateString = moment(slice.points[0].data.xFormatted).format('DD.MM, HH:mm');

    return (
        <TableTooltip
            rows={[
                [
                    <Typography key="date" color="text.text8" variant="caption12" component="span">
                        {dateString}
                    </Typography>,
                ],
                slice.points.map((point) => {
                    const isBoolean = config && config.type === WidgetTypes.Boolean;

                    const yFormatted = String(point.data.yFormatted);

                    const valueMap =
                        typeof config?.value_map === 'object' && config.value_map !== null
                            ? (config.value_map as { [key: string | number]: string })
                            : {};

                    const value = isBoolean && valueMap ? valueMap[yFormatted] : point.data.yFormatted;

                    return [
                        // TODO - "No data" in case of a data failure
                        <Typography key="value" color={theme.palette.text.text4} component="span">
                            <div>
                                <Typography variant="text13" color={theme.palette.text.text4}>
                                    {t('Current value', { value })}
                                </Typography>
                                <Typography variant="caption8" sx={{ verticalAlign: 'super' }}>
                                    {postfix}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="text13" color={theme.palette.base.color6}>
                                    {t('Max value', { value: maxY })}
                                </Typography>
                                <Typography
                                    variant="caption8"
                                    sx={{ verticalAlign: 'super' }}
                                    color={theme.palette.base.color6}
                                >
                                    {postfix}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="text13" color={theme.palette.base.color23}>
                                    {t('Min value', { value: minY })}
                                </Typography>
                                <Typography
                                    variant="caption8"
                                    sx={{ verticalAlign: 'super' }}
                                    color={theme.palette.base.color23}
                                >
                                    {postfix}
                                </Typography>
                            </div>
                        </Typography>,
                    ];
                }),
            ]}
        />
    );
};
