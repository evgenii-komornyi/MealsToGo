import React from 'react';

import { SafeArea } from '../../../components/utility/safe-area.component';

import { SearchContainer, RestaurantList } from './restaurants.styles';

import { SearchBar } from '../../../components/searchbar/searchbar';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <SearchBar />
            </SearchContainer>
            <RestaurantList
                data={[
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                    { name: 5 },
                    { name: 6 },
                    { name: 7 },
                    { name: 8 },
                    { name: 9 },
                    { name: 10 },
                    { name: 11 },
                    { name: 12 },
                ]}
                renderItem={() => (
                    <Spacer position="bottom" size="large">
                        <RestaurantInfoCard />
                    </Spacer>
                )}
                keyExtractor={item => item.name}
            />
        </SafeArea>
    );
};
