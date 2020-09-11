import styled, { keyframes } from 'styled-components';

export const HourlyCardsContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100px;
text-align: center;
transition: all 0.2s ease-in-out;
`;

export const DetailsContainer = styled.div`
margin-top: 100px;
margin-bottom: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transform: translateY(-30%);
width: 100%;
text-align: center;
transition: all 0.2s ease-in-out;
`;

const loader = keyframes`
    25%{
        color: #2ecc71;
    }
    50%{
        color: #f1c40f;
    }
    75%{
        color: #e74c3c;
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
margin-bottom: 50px;
width: 50px;
height: 50px;
border 5px solid;
color: #3498db;
border-radius: 50%;
border-top-color: transparent;
animation: ${loader} 0.3s linear;
`;

