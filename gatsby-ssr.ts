import { GatsbySSR } from 'gatsby';

export { wrapPageElement } from './src/utils/gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  pathname, loadPageDataSync, setHtmlAttributes,
}) => {
  if (process.env.NODE_DEV) {
    // @ts-ignore
    const { result: { pageContext: { lang } } } = loadPageDataSync(pathname) ?? {};

    setHtmlAttributes({ lang: lang ?? 'pl' });
  }
};
