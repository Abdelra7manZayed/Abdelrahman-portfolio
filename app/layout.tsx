import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdelrahman Gamal Zayed — AI/ML Engineer',
  description: 'AI Engineering student building practical Machine Learning, Computer Vision, NLP and Generative AI systems.',
  keywords: ['Abdelrahman Gamal Zayed', 'AI Engineer', 'Machine Learning', 'Computer Vision', 'NLP', 'GenAI', 'RAG'],
  metadataBase: new URL('https://abdelrahman-gamal-zayed.vercel.app'),
  openGraph: { title: 'Abdelrahman Gamal Zayed — AI/ML Engineer', description: 'Practical AI, Machine Learning, Computer Vision, NLP and GenAI.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
