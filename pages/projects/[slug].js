import Head from 'next/head';
import Layout from '../../components/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getProjects } from '../../lib/api';

export async function getStaticPaths() {
  const allProjectsData = await getProjects({ content_type: 'project' });
  const paths =
    allProjectsData?.map((project) => ({
      params: { slug: project.fields.slug },
    })) ?? [];

  return {
    paths,
    fallback: false,
  };
}

// Next.js will run this function for every path generated
// by getStaticPaths and pass it a context object.
export async function getStaticProps({ params }) {
  const projectList = await getProjects({
    content_type: 'project',
    'fields.slug': params.slug,
  });

  return {
    props: { project: projectList[0] },
  };
}

export default function Project({ project }) {
  const { title, slug, content, picture } = project.fields;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <div>{documentToReactComponents(content)}</div>
    </Layout>
  );
}
