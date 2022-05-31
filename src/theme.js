import {
    extendTheme,
    theme as base,
    withDefaultColorScheme,
  } from "@chakra-ui/react";
  
  const breakpoints = {
    lg: "1150px",
  };
  
  export const theme = extendTheme(
    {
      breakpoints,
      colors: {
        brand: {
          100: "#fdf2e0",
          200: "#fad9a6",
          400: "#f8c06c",
          500: "#f6a832",
        },
        bg: {
          100: "#f2efeb",
        },
        black: "#0f1419",
        white: "#fffefd"
      },
      fonts: {
        body: `Sora, ${base.fonts?.body}`,
      },
      components: {
        Input: {
          variants: {
            outline: {
              field: {
                borderColor: "brand.200",
                _hover: {
                  borderColor: "brand.400",
                },
                _focus: {
                  borderColor: "brand.500",
                },
              },
            },
          },
        },
        Button: {
          variants: {
            solid: {
              backgroundColor: "brand.500",
              color: "black",
              borderColor: "brand.500",
              _hover: {
                backgroundColor: "brand.400",
                borderColor: "brand.500",
              },
              _active: {
                backgroundColor: "brand.200",
            },
              
            },
            outline: {
              border: "1px solid",
              borderColor: "brand.500",
              color: "brand.500",
            },
            link: {
              color: "brand.500",
              borderColor: "transparent"
            },
          },
        },
      },
    },
    withDefaultColorScheme({
      colorScheme: "brand",
      components: ["Checkbox"],

    })
  );