import styled from 'styled-components';
import px2vw from '../../utilities/px2vw';

export const ReviewsScreenContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: ${px2vw(32)};
max-width: 100%;

@media (min-width: 1024px) {
  flex-wrap: nowrap;
}
`;
export const TitleContainer = styled.h1`
font-size: 2rem;
text-align: center;
margin-top: 50vh;

@media (min-width: 1024px) {
  font-size: 1.5rem;
}
`;