import Image from 'next/image';
import { contacto } from '@/lib/content';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-titulo">
      <Image
        src="/img/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero__imagen"
      />
      <div className="hero__velo" />

      <div className="envoltorio hero__contenido">
        <h1 id="hero-titulo" className="hero__titulo">
          Profesionalismo, confianza y calidad
        </h1>
        <p className="hero__bajada">
          Estudio jurídico especializado en derecho Civil, Comercial y Laboral.
        </p>
        <div className="hero__acciones">
          <a className="boton boton--primario" href="#contacto">
            Consultar al estudio
          </a>
          <a className="boton boton--lineal" href="#servicios">
            Ver servicios
          </a>
        </div>
      </div>

      <div className="hero__datos">
        <div className="envoltorio hero__datos-interior">
          <address>
            {contacto.direccion.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </address>
          <p>
            <span>{contacto.telefonos}</span>
            <span>
              <a href={contacto.celularHref}>{contacto.celular}</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
