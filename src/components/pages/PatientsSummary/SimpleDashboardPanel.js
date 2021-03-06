import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';

const SimpleDashboardPanel = ({ id, title, items, goToState, state, isHasPreview, isHasList, srcPrevirew, isFeeds }) => {

  const imageLink = (isFeeds && items.length > 0) ? items[0].link : state;

  let filterItemsArray = (items.length > 4) ? [{text: 'Loading ...'}, '', '', ''] : items;

  return (<div id={id} className="dashboard-item">
    <div className="board">
      <div className="board-header">
        <div className="control-group right">
          <button className="btn btn-success btn-inverse btn-board-more" onClick={() => goToState(state)}><i className="btn-icon fa fa-caret-right" /></button>
        </div>
        <h3 className="board-title">{ title }</h3>
      </div>
      <div className="board-body">
        {isHasPreview
          ? <div
            className="board-preview"
            style={{ backgroundImage: `url(${srcPrevirew})` }}
            onClick={() => goToState(imageLink)}
          />
          : null
        }
        {isHasList
          ? <ul className="board-list">
            {filterItemsArray.map(item =>
              <li className="board-list-item" key={_.uniqueId('__SimpleDashboardPanel__item__')}>
                {item.text ? <span className="board-list-link" onClick={() => goToState(`${state}/${item.sourceId}`, item.link)} title={item.text}>{item.text}</span> : null}
              </li>)}
          </ul>
          : null}
      </div>
    </div>
  </div>)
};

SimpleDashboardPanel.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isFeeds: PropTypes.bool,
  id: PropTypes.string,
};
SimpleDashboardPanel.defaultProps = {
  isFeeds: false,
  id: '',
};

export default SimpleDashboardPanel
