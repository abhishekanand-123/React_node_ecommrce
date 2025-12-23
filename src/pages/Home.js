import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">

      {/* HERO SECTION SAME */}

      <section className="testimonials">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-list">

          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <img src={item.image} alt="Client" />
              <p>“{item.message}”</p>
              <h4>- {item.name}</h4>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}