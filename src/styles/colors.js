const PALETTE = {
  black: {
    pure: '0, 0, 0',
    rich: '17, 17, 17',
    jungle: '24, 32, 38',
    oceanic: '27, 43, 52',
    tokyo: '36, 40, 59',
  },
  grey: {
    dove: '108, 108, 108',
    // cool
    arsenic: '56, 67, 74',
    space: '47, 56, 63',
    atomic: '60, 76, 81',
    cool: '135, 150, 176',
    // warm
    warm: '253, 108, 179',
  },
  white: {
    silver: '192, 197, 206',
    mystic: '231, 233, 237',
    cultured: '250, 250, 250',
  },
  green: {
    light: '145, 184, 89',
    dark: '153, 199, 148',
  },
  yellow: {
    light: '255, 182, 44',
    dark: '250, 200, 99',
  },
  blue: {
    light: '111, 138, 186',
    dark: '102, 153, 204',
  },
  magenta: {
    light: '255, 83, 112',
    dark: '194, 146, 195',
  },
  cyan: {
    light: '93, 174, 185',
  },
  orange: {
    light: '232, 128, 85',
  },
  purple: {
    light: '126, 100, 249',
  },
}

export const COLORS = {
  text: {
    light: PALETTE.grey.atomic,
    dark: PALETTE.white.silver,
  },
  title: {
    light: PALETTE.black.rich,
    dark: PALETTE.white.cultured,
  },
  // TODO: make this full text-shadow value?
  'title-shadow-rgba': {
    light: `${PALETTE.black.pure}, 0`,
    dark: `${PALETTE.black.pure}, 0.7`,
  },
  background: {
    light: PALETTE.white.cultured,
    dark: PALETTE.black.tokyo,
  },
  brand1: {
    light: PALETTE.green.light,
    dark: PALETTE.green.dark,
  },
  brand2: {
    light: PALETTE.yellow.light,
    dark: PALETTE.yellow.dark,
  },
  brand3: {
    light: PALETTE.cyan.light,
    dark: PALETTE.blue.dark,
  },
  brand4: {
    light: PALETTE.magenta.light,
    dark: PALETTE.magenta.dark,
  },
  'link-bg': {
    light: PALETTE.grey.cool,
    dark: PALETTE.black.pure,
  },
  'link-bg-alt': {
    light: PALETTE.white.mystic,
    dark: PALETTE.black.jungle,
  },
  'link-text-hover': {
    light: PALETTE.black.pure,
    dark: PALETTE.black.pure,
  },
  'post-header': {
    light: PALETTE.grey.space,
    dark: PALETTE.black.jungle,
  },
  'post-title': {
    light: PALETTE.grey.space,
    dark: PALETTE.yellow.dark,
  },
  'post-subtitle': {
    light: PALETTE.grey.space,
    dark: PALETTE.yellow.dark,
  },
  'post-link-text': {
    light: PALETTE.blue.light,
    dark: PALETTE.magenta.dark,
  },
  'code-highlight': {
    light: PALETTE.grey.warm,
    dark: PALETTE.grey.warm,
  },
  footer: {
    light: PALETTE.white.mystic,
    dark: PALETTE.black.jungle,
  },
}
