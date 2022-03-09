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
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
    
});

export const nav = css({
    variants: {
        variant: {
            yellow: {
                backgroundColor: '$yellow3',
                color: '$yellow12',
            },

            gray: {
                backgroundColor: '$sand3',
                color: '$sand12',
            }
        },
    },
    
})

//https://www.youtube.com/watch?v=r11FflkQqJs&ab_channel=FelipeRocha%E2%80%A2dicasparadevs