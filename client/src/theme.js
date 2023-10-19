export const tokensDark = {
  grey: {
    0:   "#ffffff", 
    10:  "#f6f6f6", 
    50:  "#f0f0f0", 
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000:"#000000", 
  },
  primary: {
    // blue
    100: "#c3cce8",
    200: "#9cacd8",
    300: "#758bc8",
    400: "#5571bc",
    500: "#3359b1",
    600: "#2c51a8", 
    700: "#22479c",
    800: "#193d90",
    900: "#082c7a",
  },
  secondary: {
    // yellow
    50:  "#e7f8e6", 
    100: "#c7eec3",
    200: "#a1e49c",
    300: "#76d970",
    400: "#4fd04d",
    500: "#1ac621",
    600: "#00b615",
    700: "#00a400",
    800: "#009200",
    900: "#007300",
  },
};

function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            ...tokensDark.primary,
            main: tokensDark.primary[400],
            light: tokensDark.primary[500],
          },
          secondary: {
            ...tokensDark.secondary,
            main: tokensDark.secondary[300],
            light: tokensDark.secondary[400],
          },
          neutral: {
            ...tokensDark.grey,
            main: tokensDark.grey[300],
          },
          background: {
            default: tokensDark.primary[600],
            alt: tokensDark.primary[500],
          },
        }
        : {
          // palette values for light mode
          primary: {
            ...tokensLight.primary,
            main: tokensDark.grey[400],
            light: tokensDark.grey[100],
          },
          secondary: {
            ...tokensLight.secondary,
            main: tokensDark.secondary[600],
            light: tokensDark.secondary[700],
          },
          neutral: {
            ...tokensLight.grey,
            main: tokensDark.grey[200],
          },
          background: {
            default: tokensDark.grey[0],
            alt: tokensDark.grey[100],
          },
        }),
    },
    
    typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 36,
      },
      h2: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 30,
      },
      h3: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 22,
      },
      h4: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};