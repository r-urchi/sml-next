import { servicios } from '@/lib/content';

export default function Servicios() {
  return (
    <section className="servicios seccion" id="servicios" aria-labelledby="servicios-titulo">
      <div className="envoltorio">
        <h2 id="servicios-titulo" className="titulo-seccion">
          Servicios
        </h2>

        <div className="servicios__grilla">
          {servicios.map((area) => (
            <article key={area.titulo} className="servicios__area">
              <h3>{area.titulo}</h3>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
