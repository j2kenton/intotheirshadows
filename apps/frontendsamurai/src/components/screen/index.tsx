import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { indigo } from '../../data/colors';

const ScreenComponent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &.colored {
    background-color: ${({ color }) => color};
  }
  &.categoryTitle {
    background: ${({ previousColor, color }) => `linear-gradient(180deg, ${previousColor} 0%, ${color} 100%)`};
  }
  &.intro {
    background: linear-gradient(180deg, #000000 0%, ${indigo[0]} 100%);
    text-align: center;
    font-size: 1.5rem;
  }
  &.toBeContinued {
    text-align: center;
    background-color: ${indigo[0]};
  }
  &.fullPage {
    height: 100vh;
  }
`;

const Category = ({ color, previousColor, className, children }) => {
  return (
    <ScreenComponent
      className={className}
      color={color}
      previousColor={previousColor}
    >
      {children}
    </ScreenComponent>
  );
};

Category.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  previousColor: PropTypes.string,
  className: PropTypes.string,
};

Category.defaultProps = {
  children: null,
  color: null,
  previousColor: null,
  className: null,
};

export default Category;
