'use client';

import { useEffect, useState } from 'react';
import { contacto } from '@/lib/content';
import { ChevronUpIcon, WhatsAppIcon } from './Icons';

export default function BotonesFlotantes() {
  const [verArriba, setVerArriba] = useState(false);

  useEffect(() => {
    const alScroll = () => setVerArriba(window.scrollY > 600);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  return (
    <div className="flotantes">
      <button
        type="button"
        className="flotantes__arriba"
        data-visible={verArriba}
        aria-label="Volver arriba"
        tabIndex={verArriba ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUpIcon />
      </button>

      <a
        className="flotantes__whatsapp"
        href={contacto.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        <span>Contactanos por WhatsApp</span>
      </a>
    </div>
  );
}
