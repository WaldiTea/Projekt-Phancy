import aboutImg from "../../assets/images/about.png";

const About = () => {
  return (
    <section className="section about-section fade">
      <img className="about-image" src={aboutImg} alt="about" />
      <article>
        <p className="about-text">
          <b>Hallo! Mein Name ist Waldemar</b> "zukünftiger" coseeaner. Ich bin
          leidenschaftlicher Frontend-Entwickler und ich mag es Dinge zu
          erschaffen, die im Internet leben.
        </p>
        <p className="about-text">
          Ich setze mich dafür ein, meine vielfältigen Hintergründe zum Lösen
          herausfordernder Probleme einzusetzen und Erfahrungen zu sammeln.
        </p>
        <p className="about-text">
          Als fleißiger und ergebnisorientierter Mensch arbeite ich immer darauf
          hin, bei jedem Projekt, das ich in die Hand nehme, das beste Ergebnis
          zu erzielen.
        </p>
      </article>
    </section>
  );
};

export default About;
