import type { Metadata, Viewport } from 'next';
import { Newsreader, Public_Sans } from 'next/font/google';
import './globals.css';

const serif = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const descripcion =
  'Somos un estudio jurídico especializado en derecho Civil, Comercial y Laboral. Nos caracterizamos por brindar un servicio personalizado de excelencia. Nuestros pilares son el profesionalismo, la calidad y la confianza con nuestros clientes. Contamos con matrículas en Provincia de Buenos Aires y Capital Federal.';

export const metadata: Metadata = {
  title: 'SML - Abogados',
  description: descripcion,
  keywords: [
    'abogados',
    'estudio juridico',
    'argentina',
    'capital federal',
    'buenos aires',
    'san isidro',
    'asesoria',
    'consulta juridica',
    'derecho civil',
    'derecho comercial',
    'derecho laboral',
    'bufete de abogados',
  ],
  formatDetection: { telephone: false },
  openGraph: {
    title: 'SML - Abogados',
    description: descripcion,
    locale: 'es_AR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d1e20',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
