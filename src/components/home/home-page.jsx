import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data.map((ev) => (
      <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
        <div className="image">
          <Image width={500} height={400} src={ev.image} alt={ev.title} />
        </div>
        <div className="content">
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
