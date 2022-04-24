import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MainTable from './tableParts/MainTable';

function CrudTable(props) {
  const {
    title,
    dataTable,
    addEmptyRow,
    removeRow,
    updateRow,
    editRow,
    finishEditRow,
    anchor,
    branch,
    fetchData,
    dataInit,
  } = props;

  useEffect(() => {
    fetchData(dataInit, branch);
  }, []);

  return (
    <MainTable
      title={title}
      addEmptyRow={addEmptyRow}
      items={dataTable}
      removeRow={removeRow}
      updateRow={updateRow}
      editRow={editRow}
      finishEditRow={finishEditRow}
      anchor={anchor}
      branch={branch}
    />
  );
}

CrudTable.propTypes = {
  title: PropTypes.string.isRequired,
  anchor: PropTypes.array.isRequired,
  dataInit: PropTypes.array.isRequired,
  dataTable: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  addEmptyRow: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  finishEditRow: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired,
};

export default CrudTable;
