import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Daisha Davis is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="daisha davis, davis, davis, web developer portfolio, daisha web developer, daisha developer, mern stack, daisha davis portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Daisha's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Daisha Davis',
};
