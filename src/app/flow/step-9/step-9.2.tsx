import { CodeBlock } from "../utils/code-block";

export default function KonfigurasiPathAlias() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Konfigurasi Path Alias (@/)
      </h2>
      <p className="mt-3 text-gray-600">
        Storybook berjalan di luar Next.js, jadi perlu diberitahu soal alias{' '}
        <code>@/</code> agar import komponen tidak error.
      </p>
      <p className="mt-1 text-sm text-gray-600">
        Buka file <code>.storybook/main.ts</code> dan tambahkan{' '}
        <code>viteFinal</code>:
      </p>
      <CodeBlock
        lang="ts"
        code={`import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  // Dukungan alias @/
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      };
    }
    return config;
  },
};
export default config;`}
      />
      <p className="mt-2 text-sm text-gray-600">
        Dengan ini, import seperti <code>@/components/ui/button</code> akan
        berfungsi di dalam file Storybook.
      </p>
    </li>
  )
}