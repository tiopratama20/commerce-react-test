import Head from "next/head";

export default function Title({ title }) {
  return (
    <Head>
      <title>{`${title} - ECOMMERCE TEST`}</title>
    </Head>
  )
}
