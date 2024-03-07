interface Gradient {
  [key: string]: string;
}

export const gradients: Gradient = {
  bgGradientOnyx: `linear-gradient(
    to bottom right,
    hsl(240, 1%, 25%) 3%,
    hsl(0, 0%, 19%) 97%
  )`,
  bgGradientJet: `linear-gradient(
      to bottom right,
      hsla(240, 1%, 18%, 0.205) 0%,
      hsla(240, 4%, 11%, 0.171) 100%
    ),
    hsla(240, 3%, 13%, 0.123)`,
  bgGradientYellow1: `linear-gradient(
    to bottom right,
    hsl(45, 100%, 71%) 0%,
    hsla(36, 100%, 69%, 0) 50%
  )`,
  bgGradientYellow2: `linear-gradient(
      135deg,
      hsla(45, 100%, 71%, 0.251) 0%,
      hsla(35, 100%, 68%, 0) 59.86%
    ),
    hsl(240, 2%, 13%)`,
  borderGradientOnyx: `linear-gradient(
    to bottom right,
    hsla(0, 0%, 25%, 0.452) 0%,
    hsla(0, 0%, 25%, 0) 50%
  )`,
  textGradientYellow: `linear-gradient(
    to right,
    hsl(45, 100%, 72%),
    hsl(35, 100%, 68%)
  )`
};

interface Colors {
  [key: string]: string;
}

export const colors: Colors = {
  jet: 'hsl(0, 0%, 22%)',
  onyx: 'hsla(240, 1%, 17%, 0.686)',
  eerieBlack1: 'hsla(240, 3%, 13%, 0.836)',
  eerieBlack2: 'hsla(240, 2%, 12%, 0.418)',
  shaBackground: 'linear-gradient(to bottom, #23d3ff 0%, #276aa5 100%)',
  white1: 'hsl(0, 0%, 100%)',
  white2: 'hsl(0, 0%, 98%)',
  orange: 'hsl(26,100%,50%)',
  blueNavy: 'hsl(228,81%,21%)',
  lightGray: 'hsl(0, 0%, 84%)',
  lightGray70: 'hsla(0, 0%, 84%, 0.7)',
  bittersweetShimmer: 'hsl(0, 43%, 51%)'
};

interface Typography {
  [key: string]: string | number;
}

export const typography: Typography = {
  ffPoppins: '"Poppins", sans-serif',
  fs1: '24px',
  fs2: '18px',
  fs3: '17px',
  fs4: '16px',
  fs5: '15px',
  fs6: '14px',
  fs7: '13px',
  fs8: '11px',
  fw300: 300,
  fw400: 400,
  fw500: 500,
  fw600: 600
};

interface Shadow {
  [key: string]: string;
}

export const shadows: Shadow = {
  shadow1: '-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
  shadow2: '0 16px 30px hsla(0, 0%, 0%, 0.25)',
  shadow3: '0 16px 40px hsla(0, 0%, 0%, 0.25)',
  shadow4: '0 25px 50px hsla(0, 0%, 0%, 0.15)',
  shadow5: '0 24px 80px hsla(0, 0%, 0%, 0.25)'
};

interface Transition {
  [key: string]: string;
}

export const transitions: Transition = {
  transition1: '2s ease',
  transition2: '0.8s ease-in-out'
};

interface Breakpoints {
  [key: string]: string;
}

const size: Breakpoints = {
  xs: '400px', // for small screen mobile
  sm: '768px', // for mobile screen
  md: '1020px', // for tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px' // for big screens
};

export const device: Breakpoints = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`
};
