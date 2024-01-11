import styled from 'styled-components';

const fontSizes = {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem',
}

const CustomButton = styled.button`
    background-color: #000;
    color: #fff;
    padding: 0.75em 1.75rem;
    margin: 0.5rem 0.5rem;
    border-radius: 0.4rem;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: ${(props => fontSizes[props.size] ?? fontSizes.md)};
    cursor: ${(props => props.disabled ? 'not-allowed' : 'pointer')};
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

export default CustomButton;