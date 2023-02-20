import Image from "next/image";
import Link from "next/link";

const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>

      <div className="content">
        {data.map((ev) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref
          >
            <Image width={500} height={300} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
