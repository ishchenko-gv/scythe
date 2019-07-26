const getInteractiveCellIds = (cells, currentPlayerId) => {
  return Object.keys(cells).filter(cell => {
    return cells[cell].owner === currentPlayerId;
  });
};

export default getInteractiveCellIds;
