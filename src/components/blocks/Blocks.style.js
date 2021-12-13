import styled from 'styled-components/macro';


export const StyledContainer = styled.div.attrs(props => {
  return {
    className: 'container'
  }
})``

export const StyledRow = styled.div.attrs(props => {
  return {
    className: 'row'
  }
})``

export const StyledCol = styled.div.attrs(props => {
  return {
    className: 'col-md-'+props.size,
  }
})``