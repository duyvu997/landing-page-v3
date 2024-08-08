// src/app/pages/index.tsx
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl mb-4'>Hello, Next.js!</h1>
      <ThemeToggle />
    </div>
  );
}
