import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text} from 'react-native';
import BcpText from './BcpText';

type Props = {
  book: string,
  chapter: number,
  verses: string,
}

export const BibleVerse = ({book, chapter, verses}: Props)  => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
       const url = `https://bible-api.com/${book}%20${chapter}:${verses}`
      const response = await fetch(url);
      const json = await response.json();
      setData(json.verses);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);


  return (
      <>
      {isLoading ? <ActivityIndicator/> : (
        <BcpText>
            {data.map(element => element.text.trim() ).join(' ')}
        </BcpText>
      )}
    </>
  );
};