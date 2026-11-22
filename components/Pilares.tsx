import Image from 'next/image';
import { pilares } from '@/lib/content';

export default function Pilares() {
  return (
    <section className="pilares" aria-labelledby="pilares-titulo">
      <Image src="/img/pilares.jpg" alt="" fill sizes="100vw" className="pilares__imagen" />
      <div className="pilares__velo" />

      <div className="envoltorio pilares__contenido">
        <h2 id="pilares-titulo" className="titulo-seccion titulo-seccion--claro">
          Pilares
        </h2>
        <ul className="pilares__lista">
          {pilares.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
