import { CodeBlock } from "../utils/code-block";

export default function MembuatStories() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Membuat Stories untuk Komponen
      </h2>
      <p className="mt-3 text-gray-600">
        Storybook menggunakan file <code>.stories.tsx</code> untuk menampilkan
        variasi komponen. Contoh untuk <code>Button</code> dari shadcn/ui di{' '}
        <code>src/components/ui/button.stories.tsx</code>:
      </p>
      <CodeBlock
        lang="tsx"
        code={`import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click Me!',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete Item',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Secondary Action',
    variant: 'outline',
  },
};`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Tips Profesional:</strong>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>
            Tag <code>autodocs</code> akan otomatis membuat halaman dokumentasi
            interaktif.
          </li>
          <li>
            Gunakan <code>satisfies</code> pada objek <code>meta</code> untuk
            pengecekan tipe yang lebih aman: <code>const meta = &#123; ... &#125; satisfies Meta&#60;typeof Button&#62;</code>
          </li>
        </ul>
      </div>
    </li>
  )
}