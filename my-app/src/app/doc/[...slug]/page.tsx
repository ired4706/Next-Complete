export default function Slug({ params }: {
  params: {
    slug: string[]
  }
}) {
  if (params.slug.length === 2) {
    return <div>
      <div>Feature: {params.slug[0]}</div>
      <div>Slug: {params.slug[1]}</div>
    </div>
  } if (params.slug.length === 1) {
    return (
      <div>
        Feature: {params.slug[0]}
      </div>
    );
  } return <div>Doc</div>
}
