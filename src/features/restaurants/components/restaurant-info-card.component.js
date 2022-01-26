import React from 'react';

import {
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Icon,
    Address,
} from './restaurant-info-card.styles';

import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Rest',
        icon,
        photos = [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        ],
        address = '100 Some random',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard mode="outlined">
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">CLOSED TEMPORARILY</Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && (
                                <SvgXml xml={open} width={20} height={20} />
                            )}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};
