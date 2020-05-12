import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import Markdown from 'react-markdown';
import codeStyle from 'ba-styles/Code.scss';
import { SourceReader, PapperBlock } from 'ba-components';
import StrippedTable from './demos/StrippedTable';

class BasicTable extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'containers/Tables/demos/';
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Stripped Table" desc="They (allegedly) aid usability in reading tabular data by offering the user a coloured means of separating and differentiating rows from one another">
          <div>
            <Markdown className={codeStyle.codePre} source="Simply by ``` import tableStyles from 'ba-components/Table.scss'; ``` then add the classNames ``` tableStyles.stripped ```" />
            <StrippedTable />
            <SourceReader componentName={docSrc + 'StrippedTable.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default BasicTable;
