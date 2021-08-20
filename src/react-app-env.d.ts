/// <reference types="react-scripts" />

import "styled-components/cssprop";
import type { CSSProp } from "styled-components/macro";

declare module "react" {
  interface Attributes {
    readonly css?: CSSProp;
  }
}
