import Image from 'next/image';

export default function Estudio() {
  return (
    <section className="estudio seccion" id="estudio" aria-labelledby="estudio-titulo">
      <div className="envoltorio estudio__grilla">
        <div className="estudio__foto">
          <Image
            src="/img/estudio.jpg"
            alt="Balanza de la justicia y mazo sobre libros de derecho"
            width={1600}
            height={1067}
            sizes="(min-width: 900px) 520px, 100vw"
          />
        </div>

        <div className="estudio__texto">
          <h2 id="estudio-titulo" className="titulo-seccion">
            Nuestro estudio
          </h2>
          <p>
            Somos un estudio jurídico especializado en derecho Civil, Comercial y Laboral.
          </p>
          <p>
            Nos caracterizamos por brindar un servicio personalizado de excelencia. Nuestros
            pilares son el profesionalismo, la calidad y la confianza con nuestros clientes.
          </p>
          <p>Contamos con matrículas en Provincia de Buenos Aires y Capital Federal.</p>
        </div>
      </div>
    </section>
  );
}
