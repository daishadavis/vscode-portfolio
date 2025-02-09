const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>

      <section>
      <pre style={{ backgroundColor: "#24292e", padding: "15px", borderRadius: "8px", overflowX: "auto", whiteSpace: "pre-wrap", fontSize: "16px" }}>
        <code>
  {`
  <section>
    <p>
      Hello! My name is Daisha and I enjoy creating things that live on the internet. My interest in coding started in 2020 when I tried to
      automate my work using Python for excel data entry and manipulation. It turns out I enjoyed coding on the weekends more then I did working in 
      finance. So I quit my job and started learning how to code. 
    </p>
  </section>

  <section>
      <p>
        Fast-forward to today, and I've had the privilege of being a part of Codesmith Future Code Cohort working with the incredible instructors and 
        mentors to further my coding journey. My main focus these days is building projects I feel passionate about that help the developer community.
        I 'm always looking to work with new people and create new experiences that could change the world.
      </p>
  </section>

  <section>
      <p>Here are a few technologies I've been working with recently:</p>
      <ul>
          <li>Javascript(ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
      </ul>
  </section>
  
  `}
        </code>
      </pre>
      </section>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
