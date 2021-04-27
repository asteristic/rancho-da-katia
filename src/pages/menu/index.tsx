import Head from 'next/head';

import Header from '../../components/header';
import ImageTitle from '../../components/imageTilte';
import Dinner from '../../components/dinner';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

export default function Menu() {
  return (
    <>
      <Head>
        <title>Rancho Da Katia | Menu</title>
      </Head>
      <Header />
      <ImageTitle 
        title={'The Perfect'} 
        subTitle={'Dinner'} 
        backgroundImage={'menu/menu-08.jpg'}
      />
      <Dinner />
      <ImageTitle 
        title={'Testeful'} 
        subTitle={'Lunch'} 
        backgroundImage={'menu/menu-11.jpg'}
      />
      <Dinner />
      <Contact />
      <Footer />
    </>
  )
}