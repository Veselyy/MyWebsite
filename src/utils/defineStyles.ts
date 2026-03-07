import type { SxProps } from '@mui/material/styles';
import type { AppTheme } from '../theme';

/**
 * Typ pro jeden styl – objekt nebo funkce přijímající theme.
 * Umožňuje TS podporu CSS vlastností a správnou inferenci klíčů.
 */
type StyleValue = SxProps<AppTheme> | ((theme: AppTheme) => SxProps<AppTheme>);

/**
 * defineStyles – předáte objekt stylů (každá hodnota objekt | (theme) => objekt).
 * Vrací Readonly<T> pro inferenci klíčů a podporu autocomplete u CSS vlastností.
 */
export function defineStyles<T extends Record<string, StyleValue>>(stylesObject: T): Readonly<T> {
    return stylesObject;
}

/**
 * defineStyle – jeden styl (pro useMemo, inline definice atd.).
 */
export function defineStyle(styleObject: SxProps<AppTheme>): SxProps<AppTheme> {
    return styleObject;
}
