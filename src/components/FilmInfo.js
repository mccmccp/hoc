import React, { Component } from 'react';
import withState from 'recompose/withState';
import compose from 'recompose/compose';

import { getById } from '../api/omdb';
import windowWidth from '../helpers/windowWidth';
import loading from '../helpers/loading';
import perfomanceTest from '../helpers/perfomanceTest';
import handleErrors from '../helpers/handleErrors';
import withLocalState from '../helpers/withLocalState';

class FilmInfo extends Component {
  componentWillReceiveProps(nextProps) {
    const { windowWidth, itemId, handleLoading, handleItem } = nextProps;

    if (itemId && this.props.itemId !== itemId) {
      handleLoading(true);
      const plotSize = windowWidth > 768 ? 'full' : 'short';

      getById(itemId, plotSize).then((result) => {
        if (result.Error) return;
        handleLoading(false);
        handleItem(result);
      });
    }
  }

  render() {
    const { item, itemLocal, handleLocalItem } = this.props;
    //var ddd = handleLocalItem('433')
    //console.log(665646, ddd);
    if (!item) {
      return null;
    }

    return (
      <div>
        <img src={item.Poster} alt={item.Title} />
        <div>
          <h1> {item.Title} </h1>
          <p> Actors: {item.Actors} </p>
          <p> Genres: {item.Genre} </p>
          <p> {item.Plot} </p>
        </div>
      </div>
    );
  }
}

const withStateLoading = withState('loading', 'handleLoading', false);
const withStateItem = withState('item', 'handleItem', null);
const withLocalStateItem = withLocalState('itemLocal', 'handleLocalItem', '12345')
const loadingPredicate = (props) => {
  return props.loading;
}

export default compose(
  windowWidth,
  withStateLoading,
  withStateItem,
    withLocalStateItem,
  loading(loadingPredicate),
  perfomanceTest,
  handleErrors
)(FilmInfo);
