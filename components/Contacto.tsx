'use client';

import { FormEvent, useState } from 'react';

type Estado = 'inactivo' | 'enviando' | 'enviado' | 'error';

export default function Contacto() {
  const [estado, setEstado] = useState<Estado>('inactivo');

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    setEstado('enviando');

    try {
      const cuerpo = new URLSearchParams();
      datos.forEach((valor, clave) => cuerpo.append(clave, String(valor)));

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: cuerpo.toString(),
      });
      if (!res.ok) throw new Error('Respuesta no válida');

      form.reset();
      setEstado('enviado');
    } catch {
      setEstado('error');
    }
  }

  return (
    <section className="contacto seccion" id="contacto" aria-labelledby="contacto-titulo">
      <div className="envoltorio contacto__grilla">
        <div className="contacto__intro">
          <h2 id="contacto-titulo" className="titulo-seccion titulo-seccion--claro">
            Consultanos por asesoramiento personalizado
          </h2>
          <p>Contanos tu caso y el estudio se comunica con vos.</p>
        </div>

        <form className="formulario" name="contacto" onSubmit={enviar}>
          <input type="hidden" name="form-name" value="contacto" />
          <p className="formulario__trampa" aria-hidden="true">
            <label>
              No completar: <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div className="formulario__campo">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" type="text" name="nombre" maxLength={30} required autoComplete="name" />
          </div>

          <div className="formulario__fila">
            <div className="formulario__campo">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" name="email" required autoComplete="email" />
            </div>
            <div className="formulario__campo">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" type="tel" name="telefono" required autoComplete="tel" />
            </div>
          </div>

          <div className="formulario__campo">
            <label htmlFor="consulta">Consulta</label>
            <textarea id="consulta" name="consulta" rows={4} maxLength={300} required />
          </div>

          <button type="submit" className="boton boton--primario" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando…' : 'Enviar consulta'}
          </button>

          <p className="formulario__estado" role="status" aria-live="polite" data-estado={estado}>
            {estado === 'enviado' && 'Recibimos tu consulta. Te vamos a responder a la brevedad.'}
            {estado === 'error' &&
              'No pudimos enviar la consulta. Probá de nuevo o escribinos por WhatsApp.'}
          </p>
        </form>
      </div>
    </section>
  );
}
