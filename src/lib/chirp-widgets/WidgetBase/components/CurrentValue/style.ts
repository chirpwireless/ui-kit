import { Box, TypographyProps, styled , Typography } from '@mui/material';


export const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'size'
})<{ size: 'big' | 'small' }>(({ size }) => ({
  '--font-size': size === 'big' ? '40px' : '18px',
  '--decimal-font-size': size === 'big' ? '0.5em' : '0.62em',
  '--line-height': 1.1,

  display: 'flex',
  justifyContent: 'center',
  minHeight: 'calc(var(--font-size) * var(--line-height))',
  fontSize: 'var(--font-size)',
  lineHeight: 'var(--line-height)'
}));

export const Value = styled(Typography)({
  maxWidth: 'max-content',
  fontWeight: 500,
  fontSize: 'inherit',
  lineHeight: 'inherit',
  textAlign: 'center',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  display: '-webkit-box',
  boxOrient: 'vertical',
  WebkitBoxOrient: 'vertical',
  lineClamp: '2',
  WebkitLineClamp: '2'
});

export const DecimalValue = styled(Typography)<TypographyProps>({
  alignSelf: 'flex-start',
  fontSize: 'var(--decimal-font-size)'
});

export const Postfix = styled(Typography)<TypographyProps>({
  paddingLeft: '4px',
  fontSize: '12px',
  lineHeight: '18px'
});
