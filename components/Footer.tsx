import Image from 'next/image';
import { contacto } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="pie">
      <div className="envoltorio pie__interior">
        <div className="pie__datos">
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

        <Image
          className="pie__logo"
          src="/img/logo-claro.png"
          alt="SML Abogados"
          width={800}
          height={472}
        />
      </div>
    </footer>
  );
}
