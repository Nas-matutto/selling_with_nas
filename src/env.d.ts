/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly BREVO_API_KEY: string;
  readonly BREVO_LIST_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
