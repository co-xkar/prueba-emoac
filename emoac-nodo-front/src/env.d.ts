interface ImportMetaEnv {
  readonly VITE_BACK_URL: string;
  readonly VITE_GET_NODOS_PATH: string;
  readonly VITE_NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}