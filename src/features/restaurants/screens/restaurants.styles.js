import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const SearchContainer = styled.View`
    padding: 16px;
`;

export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: { padding: 16 },
})``;
