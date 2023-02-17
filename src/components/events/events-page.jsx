import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <Image width={500} height={500} src={ev.image} alt={ev.title} />
          <h2>{ev.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
