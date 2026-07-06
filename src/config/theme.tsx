import { FC, memo, PropsWithChildren } from 'react';
import { css, createGlobalStyle, createTheme, CSSProperties, styled, WebTarget, RuleSet } from 'styled-components';
import { normalize } from 'styled-normalize';

const defaultFontSize = 16;

export { ThemeProvider } from 'styled-components';

export const convertToRem = (value: number) => `${value / defaultFontSize}rem`;

export const theme = createTheme({
  colors: { bg: '#1f1f1f', border: '#565656', text: '#1a1a1a', textSecondary: '#999999', primary: '#28e98c', iconDefault: '#28e98c', iconPrimary: '#999999' },
  padding: { es: convertToRem(9), s: convertToRem(20), m: convertToRem(30), l: convertToRem(180) },
  margin: { s: convertToRem(10), m: convertToRem(30) },
  radius: { m: convertToRem(30) },
  fontSize: {
    exs: convertToRem(8),
    tag: convertToRem(12),
    S: convertToRem(14),
    M: convertToRem(16),
    T: convertToRem(32),
    H: convertToRem(48),
    H1: convertToRem(78),
  },
});

export const typographyStyles = ['H', 'H1', 'body', 'bodySmall', 'subtitle', 'extraSmall'] as const;
export type TypographyStyles = (typeof typographyStyles)[number];

const mediaList = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

type Media = (typeof mediaList)[number];

export const media: Record<Media, string> = {
  sm: convertToRem(640),
  md: convertToRem(768),
  lg: convertToRem(1024),
  xl: convertToRem(1280),
  '2xl': convertToRem(1536),
} as const;

export const typography: Record<TypographyStyles, RuleSet> = {
  H1: css`
    font-size: ${convertToRem(45)};
    font-weight: 300;

    @media (min-width: ${media.sm}) {
      font-size: ${theme.fontSize.H1};
    }
  `,
  H: css`
    font-size: ${theme.fontSize.H};
    font-weight: 300;
    display: inline;
  `,
  bodySmall: css`
    font-size: ${theme.fontSize.S};
    line-height: 1.7;
    color: ${theme.colors.textSecondary};
  `,
  body: css`
    font-size: ${theme.fontSize.M};
    line-height: ${convertToRem(30)};
    color: ${theme.colors.textSecondary};
  `,
  subtitle: css`
    font-size: ${theme.fontSize.M};
    line-height: 1.7;
    color: ${theme.colors.textSecondary};
  `,
  extraSmall: css`
    font-size: ${theme.fontSize.exs};
    line-height: ${theme.fontSize.exs};
    color: ${theme.colors.textSecondary};
  `,
} as const;

export const effectList = ['flexColumn', 'flexWrap', 'horizontalList', 'verticalList', 'fullHeight'] as const;
export type EffectList = (typeof effectList)[number];

export const effects: Record<EffectList, RuleSet> = {
  flexColumn: css`
    flex-direction: column;
  `,
  flexWrap: css`
    flex-wrap: wrap;
  `,
  horizontalList: css`
    flex-wrap: wrap;
    gap: ${convertToRem(20)};
  `,
  verticalList: css`
    gap: ${convertToRem(30)};
    flex-direction: column;
  `,
  fullHeight: css`
    justify-content: center;

    @media (min-width: ${media.md}) {
      min-height: 100vh;
    }
  `,
};

// Define dark overrides once as a css partial (DRY)
const darkVars = css`
  ${theme.vars.colors.bg}: #1f1f1f;
  ${theme.vars.colors.text}: #ffffff;
`;

// Apply via media query (auto) and class (manual toggle)
export const GlobalStyle = createGlobalStyle`
  ${normalize};

  html, body {
    font-size: ${defaultFontSize}px;
    color: ${theme.colors.text};
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    background-color: ${theme.colors.bg};
  }

  h1, h2, h3 {
    margin: 0;
  }

  p {
    margin: 0 0 ${convertToRem(16)};
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    :root:not(.light) { ${darkVars} }
  }

  .dark { ${darkVars} }
`;

export type BoxProps = PropsWithChildren<{
  component?: WebTarget;
  customStyles?: CSSProperties;
  onClick?: React.MouseEventHandler;
  modifiers?: RuleSet | RuleSet[];
  effectList?: EffectList[];
}>;

const BoxStyles = styled.div<{ $customStyles?: CSSProperties; $modifiers?: RuleSet; $effects?: EffectList[] }>`
  display: flex;

  ${({ $modifiers }) => $modifiers};
  ${({ $effects }) => $effects};

  ${(props) => props.$customStyles};
`;

export const Box: FC<BoxProps> = memo(({ component = 'div', customStyles, modifiers, effectList, ...rest }) => (
  <BoxStyles
    as={component}
    $customStyles={customStyles}
    $modifiers={modifiers}
    $effects={css`
      ${effectList?.map((eff) => effects[eff])}
    `}
    {...rest}
  />
));
