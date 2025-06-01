declare module "*.svg" {
  import * as React from "react";

  /**
   * Используйте `import Logo from './logo.svg';` для получения React-компонента.
   */
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;

  /**
   * Используйте `import { src as logoUrl } from './logo.svg';` для получения URL файла.
   */
  export const src: string;
}
