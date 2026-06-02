import eventos from "../data/eventos";
import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <div className="py-10 bg-blue-100 min-h-screen">
      <h1 className="text-center mb-20 text-5xl">Página eventos</h1>
      <main className="flex justify-center items-center gap-3">
        {eventos.map((e) => (
          <EventCard key={e.id} evento={e}></EventCard>
        ))}
      </main>
    </div>
  );
}
