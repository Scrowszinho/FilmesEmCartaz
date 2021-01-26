import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, ViewArea} from './Styles';
import {ActivityIndicator} from 'react-native';
export default function Connection() {
    const [movies, setMovies] = useState([]);
    const  [loading, setLoading] = useState(true);

    useEffect(() =>{
    const requestMovies = async () =>{  
        setLoading(true);
        const req = await fetch('https://api.b7web.com.br/cinema/');
        const json = await req.json();
        if(json){
            setMovies(json);
        }
    }
    requestMovies();
    setLoading(false);
    },[]);

    return (
      <View>
      {loading && 
      <View>
          <ActivityIndicator size='large' color='red'/>
          <Text>Carregando...</Text>
      </View>
      }
      {!loading && 
      <>
      <Text>Total de filmes: {movies.length}</Text>
        <FlatList 
        data={movies}
        renderItem={({item})=> (
        <ViewArea>
        <Image source={{uri: item.avatar}} 
        resizeMode='contain'
        />
        <Text>{item.titulo}</Text>
        </ViewArea>
        )}
        keyExtractor={item => item.titulo}
        />
      </>
      }
      </View>
    );
  }