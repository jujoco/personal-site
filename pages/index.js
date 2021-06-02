import Head from 'next/head';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

import { getProjects } from '../lib/api';

export async function getStaticProps() {
  const allProjectsData = await getProjects({ content_type: 'project' });
  return {
    props: { allProjectsData },
  };
}

export default function Home({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>Home Page</title>
      </Head>
      <section>
        <p>Im jujooco</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section>
        <h2>Blog</h2>
        <div>
          {allProjectsData.map((project) => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
