"use client";

// import eventos from "../data/eventos"; Aquí es cuando los datos no me venian de la api
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

export default function Events() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function conectar() {
      setLoading(true);
      const res = await fetch("http://localhost:3001/api/events");
      const data = await res.json();
      setEventos(data);
      setLoading(false);
    }

    conectar();
  }, []);

  return (
    <div className="py-10 bg-blue-100 min-h-screen">
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div>
          <h1 className="text-center mb-20 text-5xl">Página eventos</h1>
          <main className="flex justify-center items-center gap-3">
            {eventos.map((e) => (
              <EventCard key={e.id} evento={e}></EventCard>
            ))}
          </main>
        </div>
      )}
    </div>
  );
}
