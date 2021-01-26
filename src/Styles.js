import styled from 'styled-components/native';

export const View = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
  align-items: center;
  justify-content: center;
  padding-top:40px;
`;

export const Text = styled.Text`
font-size:24px;
text-align:center;
color:#fff;
font-weight:bold;
`;


export const FlatList = styled.FlatList`
flex:1;
`;

export const Image = styled.Image`
height:400px;
`;

export const ViewArea = styled.View`
margin-bottom:40px;
margin-top:40px;
`;

export const LoadingArea = styled.View`
flex:1;
justify-content:center;
align-items:center;
`;