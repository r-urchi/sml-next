import Image from 'next/image';
import { clientes } from '@/lib/content';

export default function Clientes() {
  return (
    <section className="clientes seccion" id="clientes" aria-labelledby="clientes-titulo">
      <div className="envoltorio clientes__grilla">
        <div className="clientes__foto">
          <Image
            src="/img/clientes.jpg"
            alt="Apretón de manos entre dos profesionales"
            width={2000}
            height={1335}
            sizes="(min-width: 900px) 440px, 100vw"
          />
        </div>

        <div className="clientes__texto">
          <h2 id="clientes-titulo" className="titulo-seccion">
            Algunos clientes que confiaron en nosotros
          </h2>
          <ul className="clientes__lista">
            {clientes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
