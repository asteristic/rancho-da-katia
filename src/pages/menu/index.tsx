import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import { getPrismicClient } from '../../services/prismic';

import Header from '../../components/header';
import ImageTitle from '../../components/imageTilte';
import Dinner from '../../components/dinner';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

interface Dishe {
  uid: string,
  name: string,
  photo: string,
  ingredients: string,
  description: string,
  valor: string,
  disheNumber: number,
}

interface DishesProps {
  dishes: Dishe[] 
}

export default function Menu({ dishes }:DishesProps) {
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
      <Dinner dishes={ dishes } />
      <Contact />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const pratosResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'dishes')],
    {
      fetch: ['dishes.name', 'dishes.description', 'dishes.price', 'dishes.photo','dishes.dishe_number', 'dishes.ingredients'],
      pageSize: 50,
    }
  );

  const results = pratosResponse.results.map(prato => {
    return {
      uid: prato.uid,
      name: prato.data.name[0].text,
      photo: prato.data.photo.url,
      ingredients: prato.data.ingredients[0].text,
      description: prato.data.description.find(description => description.type === 'paragraph')?.text ?? '',
      price: prato.data.price,
      disheNumber: prato.data.dishe_number,
    };
  });
  
  return {
    props: { dishes: results },
  };
};
