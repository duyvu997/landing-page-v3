import './globals.css';

import { Inter_Tight, Poppins, Space_Grotesk } from 'next/font/google';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Script from 'next/script';
import { ThemeProviders } from './theme-provider';

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const sans = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning>
      {/* <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/static/favicons/wata-favicon-no-bg.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/static/favicons/wata-favicon-no-bg.png'
      /> */}
      <meta
        name='theme-color'
        media='(prefers-color-scheme: light)'
        content='#fff'
      />
      <meta
        name='theme-color'
        media='(prefers-color-scheme: dark)'
        content='#000'
      />
      <meta
        name='format-detection'
        content='telephone=no, date=no, email=no, address=no'
      />

      {/* Google Analytics */}
      {/* <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-Q8B3GSYCGZ'
        strategy='afterInteractive'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q8B3GSYCGZ');
        `}
      </Script> */}

      {/* Microsoft Clarity */}
      {/* <Script
        id='microsoft-clarity-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "n0dfarupth");
                `,
        }}
      /> */}

      <body
        // suppressHydrationWarning={true}
        className={`bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white ${sans.variable}`}>
        <ThemeProviders>
          <div className='flex flex-col justify-between font-sans'>
            <Header />
            <main className='mx-auto max-w-full lg:w-full'>{children}</main>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
