const theme = {
  spacing: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '16px',
    4: '24px',
    5: '40px',
    6: '52px',
    7: '80px',
  },

  breakpoint: {
    landscape: 1024,
    portrait: 800,
    mobile: 480,
  },

  color: {
    brand: {
      primary: '#be0000',
      secondary: '#4e525d',
      tertiary: '#252f36',
    },
    background: {
      body: '#fff',
      default: '#fff',
      surface: '#f1f1f1',
      overlay: 'rgba(0,0,0,0.95)',
    },
    text: {
      default: '#444',
      headings: '#222',
      secondary: '#999',
    },
    notification: {
      default: '#8f872e',
      error: '#ca3d3d',
      info: '#e9f7fe',
      success: '#5f9025',
    },
  },

  layout: {
    width: '90%',
    maxWidth: '1200px',
  },

  font: {
    family: {
      default: '"IBM Plex Sans", sans-serif',
      headings: '"IBM Plex Sans", sans-serif',
    },
    size: {
      body: '15px',
      default: '1rem',
      XS: '0.8rem',
      S: '0.9rem',
      M: '1rem',
      L: '1.25rem',
      XL: '1.5rem',
    },
    weight: {
      thin: 300,
      regular: 400,
      bold: 700,
    },
  },

  form: {
    control: {
      height: {
        default: '46px',
        small: '36px',
      },
      borderRadius: '3px',
      default: {
        background: '#fff',
        border: '1px solid #dadada',
        boxShadow: 'none',
        color: '#444',
      },
      focus: {
        background: '#fff',
        border: '1px solid #ccc',
        boxShadow: 'inset 0px 1px 1px rgba(0,0,0,.1)',
        color: '#444',
      },
      error: {
        background: '#fff',
        border: '1px solid #a20000',
        boxShadow: 'none',
        color: '#444',
      },
    },
  },

  button: {
    height: {
      default: '46px',
      small: '36px',
    },
    borderRadius: '3px',
    default: {
      background: '#be0000',
      border: 'none',
      boxShadow: 'none',
      color: '#fff',
    },
    hover: {
      background: '#a20000',
      border: 'none',
      boxShadow: 'none',
      color: '#fff',
    },
  },

  typography: {
    h1: `
      font-size: 2.5rem;
      line-height: 3rem;
      padding-top: 0.1875rem;
      margin-bottom: 1.3125rem;
    `,
    h2: `
      font-size: 2.1rem;
      line-height: 3rem;
      padding-top: 0.3375rem;
      margin-bottom: 1.1625rem;
    `,
    h3: `
      font-size: 1.75rem;
      line-height: 2.25rem;
      padding-top: 0.84375rem;
      margin-bottom: 1.40625rem;
    `,
    h4: `
      font-size: 1.25rem;
      font-weight: 700;
    `,
    h5: `
      font-size: 1rem;
      font-weight: 700;
    `,
    h6: `
      font-size: 1rem;
      font-weight: 700;
    `,
    p1: {
      color: 'inherit',
      fontSize: '1rem',
      margin: '0 0 1.5rem 0',
    },
    p2: {
      color: 'inherit',
      fontSize: '0.9rem',
      margin: '0 0 1.5rem 0',
    },
  },

  anchor: {
    default: {
      color: '#be0000',
    },
    hover: {
      color: '#a20000',
    },
  },
  border: {
    default: '1px solid #dadada',
  },
  borderRadius: {
    default: '3px',
  },
  boxShadow: {
    default: '0px 1px 8px rgba(0,0,0,.05)',
    heavy: '0px 3px 10px rgba(0,0,0,.25)',
  },
  lineHeight: {
    default: '1.5rem',
  },
  marginBottom: {
    default: '1.5rem',
  },
  transition: {
    default: 'ease-out 0.25s',
  },

  tag: {
    borderRadius: '20px',
    height: '40px',
    spacing: '8px',
    default: {
      background: '#f1f1f1',
      border: 'none',
      color: 'inherit',
    },
    hover: {
      background: '#f8f8f8',
      border: 'none',
      color: 'inherit',
    },
    active: {
      background: '#222',
      border: 'none',
      color: '#fff',
    },
  },

  pagination: {
    default: {
      border: '2px solid #ccc',
      color: 'inherit',
    },
    active: {
      border: '2px solid #000',
      color: 'inherit',
    },
  },
};

export default theme;
