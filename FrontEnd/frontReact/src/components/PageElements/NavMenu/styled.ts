import { createStitches } from "@stitches/core";
import { yellow, sand } from '@radix-ui/colors'

/**
 * work with radix;
 * get colors by import with @radix-ui/colors
 */

export const { css } = createStitches({
    theme: {
        colors: {
            ...yellow,
            ...sand
        }
    },
});

export const nav = css({
    variants: {
        variant: {
            yellow: {
                backgroundColor: '$yellow3',
                color: '$yellow12',
                '&:hover': {
                    backgroundColor: '$yaellow4'
                }
            },
            gray: {
                backgroundColor: '$sand3',
                color: '$sand12',
                '&:hover': {
                    backgroundColor: '$sand4'
                }
            }
        },
    },
})