import { styled } from '@mui/material';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

export const Link = (props: LinkProps) => {
	return <StyledLink {...props} />;
};

const StyledLink = styled(RouterLink)(
	({ theme }) => `
  text-decoration: none;
  position: relative;
  color: ${theme.palette.text.primary};
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: ${theme.palette.text.primary};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }
  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`
);
