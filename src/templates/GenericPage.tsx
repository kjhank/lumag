import { PageProps } from 'gatsby';

const GenericPage = (props: PageProps) => {
  console.log(props);

  return (<h1>page</h1>);
};

export default GenericPage;
