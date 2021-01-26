import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, Image, ViewArea} from './Styles';

export default function Connection() {
    const [movies, setMovies] = useState([]);

    const handleClicker = async () => {
        const req = await fetch('https://api.b7web.com.br/cinema/');
        const json = await req.json();
        if(json){
            setMovies(json);
        }
    }

    return (
      <View>
      <Button 
      title= 'Carregar Filmes'
      onPress={handleClicker}
      />
        <FlatList 
        data={movies}
        renderItem={({item})=> (
        <ViewArea>
        <Image source={{uri: item.avatar}} />
        <Text>{item.titulo}</Text>
        </ViewArea>
        )}
        keyExtractor={item => item.titulo}
        />
      </View>
    );
  }