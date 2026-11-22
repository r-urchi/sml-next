'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navegacion } from '@/lib/content';
import { CloseIcon, MenuIcon } from './Icons';

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierto(false);
    };
    window.addEventListener('keydown', alTeclear);
    return () => window.removeEventListener('keydown', alTeclear);
  }, [abierto]);

  return (
    <header className="cabecera">
      <div className="cabecera__interior">
        <a href="#home" className="cabecera__logo" aria-label="SML Abogados, ir al inicio">
          <Image src="/img/logo.png" alt="SML Abogados" width={800} height={472} priority />
        </a>

        <button
          type="button"
          className="cabecera__boton"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? <CloseIcon /> : <MenuIcon />}
          <span className="solo-lectores">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>

        <nav
          id="menu-principal"
          className="cabecera__nav"
          data-abierto={abierto}
          aria-label="Principal"
        >
          <ul>
            {navegacion.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setAbierto(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
