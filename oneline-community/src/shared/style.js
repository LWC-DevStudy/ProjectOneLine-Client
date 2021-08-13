import { css } from 'styled-components';

export const borderBox = (radius = '3px', padding = 0) => {
    return css`
        box-sizing: border-box;
        padding: ${padding};
        border-radius: ${radius};
    `;
};

export const flexBox = (sortHoz = 'center', sortVer = 'center') => {
    return css`
        display: flex;
        justify-content: ${sortHoz};
        align-items: ${sortVer};
    `;
};

export const flexHoz = (sort = 'center') => {
    return css`
        display: flex;
        align-items: ${sort};
    `;
}

export const flexVer = (sort = 'center') => {
    return css`
        display: flex;
        align-items: ${sort};
    `;
}

const theme = {
    palette: {
        blue: '64, 115, 158',
        yellow: '255, 211, 42',
        white: '255, 255, 255'
    },

    size: {
        defaultWidth: '540px',
    },
};

export default theme;