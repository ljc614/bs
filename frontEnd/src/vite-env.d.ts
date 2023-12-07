/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}

declare module '@arco-iconbox/vue-cmstop-icons';

interface Window {
  situoyun: {
    env: any;
  };
}
