"use client";

function EventCard({ evento }) {
  const { id, nom, data, ciutat } = evento;

  return (
    <div
      id={id}
      className="border flex, flex-col w-fit p-5 gap-3 rounded hover:bg-amber-500 bg-amber-100"
    >
      <h2>Nombre: {nom}</h2>
      <p>Fecha: {data}</p>
      <p>Ciudad: {ciutat}</p>
    </div>
  );
}

export default EventCard;
