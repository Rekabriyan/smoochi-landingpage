import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  keywords?: string;
};

export default function SEO({ title, description, keywords }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
}
