import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  keywords?: string;
  structuredData?: object;
};

export default function SEO({ title, description, keywords, structuredData }: Props) {
  useEffect(() => {
    const staticKeywords = document.querySelector('meta[name="keywords"]:not([data-rh="true"])');
    if (staticKeywords) {
      staticKeywords.remove();
    }
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
