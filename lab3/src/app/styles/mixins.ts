import { css } from "styled-components";


export const placeholder =  (color: TemplateStringsArray) => css`
  &::-webkit-input-placeholder {
      ${ color }
  };
  &:-moz-placeholder           {
      ${ color }
  }
  &::-moz-placeholder          {
      ${ color }
  }
  &:-ms-input-placeholder      {
      ${ color }
  }
`
