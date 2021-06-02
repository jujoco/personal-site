import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  const { title, slug, content, picture } = project.fields;
  return (
    <div>
      <div>{title}</div>

      <Image
        src={`https:${picture.fields.file.url}`}
        width={200}
        height={200}
      />
      <Link href={`/projects/${slug}`}>
        <a>See Project</a>
      </Link>
    </div>
  );
}
