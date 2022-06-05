import {
  extendTheme,
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
      white: "#fffefd",

      brandSecondary:{
        100:"#dfd3e0",
        200:"#cfbdd1",
        400: "#b091b3",
        500: "#713977"
      }

    },
   
    components: {
      Input: {
        variants: {
          filled: {
            field: {
              bgColor: "white",
              borderColor: "gray.200",
              _hover: {
                bgColor: "brand.100",
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
              borderColor: "brand.500",
            },
            _focus: {
              borderColor: "brand.500",
            },
          },
          outline: {
            border: "1px solid",
            borderColor: "brandSecondary.500",
            color: "brandSecondary.500",
            _hover: {
              backgroundColor: "brandSecondary.100",
              borderColor: "brandSecondary.500",
            },
            _active: {
              backgroundColor: "brandSecondary.100",
              borderColor: "brandSecondary.500",
            },
            _focus: {
              backgroundColor: "brandSecondary.100",
              borderColor: "brandSecondary.100",
            },
          },

          ghost: {
            bgColor: "gray.300",
          
            _hover: {
              backgroundColor: "gray.200",
              
            },
            _active: {
              border:"none",
              backgroundColor: "gray.100",
            
            },
            _focus: {
          
              backgroundColor: "gray.100",
             
            },
          },
          Link:{
            color: "brandSecondary.500",
          }
        },
      },
    },
  },
);
