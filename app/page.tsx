import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Estudio from '@/components/Estudio';
import Pilares from '@/components/Pilares';
import Servicios from '@/components/Servicios';
import Clientes from '@/components/Clientes';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import BotonesFlotantes from '@/components/BotonesFlotantes';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Estudio />
        <Pilares />
        <Servicios />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
      <BotonesFlotantes />
    </>
  );
}
