import Head from 'next/head'
import {
  BatteriesSection,
  BikeOptions,
  ContactUsForm,
  FQA,
  GeneralInfo,
  NewUs,
  Plans,
  Performance,
  MainSection,
} from './components'
import { HomeStyled } from './styles'
import { Theme } from "../lib/configuration/Theme.styled"
import { Advantages, Autonomy } from './components/Advantages'
import { Layout } from '@/lib/components'
import Script from 'next/script'
import Link from 'next/link'


export default function Home() {

  const location = { pathName: "home" }
  return (
    <>
      <Head>
        {/*  <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MZCDDXKYR9"></Script>
        <Script>
          {
            ` window.dataLayer = window.dataLayer || []
            function gtag() {dataLayer.push(arguments)}
            gtag('js', new Date())
  
            gtag('config', 'G-MZCDDXKYR9', {'debug_mode': true })
            window.gtag = gtag`
          }
        </Script>

        <title>Vammo - Motos elétricas</title>
        <link rel="icon" href="../../public/favicon.ico" />
        <link rel="canonical" href="https://vammo.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />

        <meta name="robots" content="follow, index" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Economize tempo e dinheiro. Alugue agora sua moto elétrica com baterias ilimitadas. #vammo" />

        <meta name="author" content="Vammo" />

        <meta property="og:image" content="/opengrafts/facebook.webp" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Vammo - Motos elétricas" />
        <meta property="og:url" content="https://www.vammo.com" />

        <meta name="twitter:image" content="/opengrafts/twitter.webp" />

        <meta name="google-site-verification" content="g28aujdb0zjUtP30dO8ROkcG_3eMUx3sDiyhuZgZdmo" />

      </Head>

      <Theme>
        <Layout location={location}>
          <HomeStyled>
            <MainSection />
            <GeneralInfo />
            <BatteriesSection />
            {/* <Autonomy /> */}
            <BikeOptions />
            {/* <Advantages /> */}
            <Plans />
            {/* <Performance /> */}
            <NewUs />
            {/* <FQA /> //no sirve error window.tagt*/}
            {/* <ContactUsForm /> */}

          </HomeStyled>
        </Layout>
      </Theme>

      {/* <main >

        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  )
}
