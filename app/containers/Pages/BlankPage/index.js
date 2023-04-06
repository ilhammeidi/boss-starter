import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'boss-api/dummy/brand';
import { PapperBlock } from 'boss-components';
import LimitedBadges from '../../../components/Badges/LimitedBadges';

function BlankPage() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
      </Helmet>
      <PapperBlock title='Blank Page' desc='Some text description'>
        Content
        <div>
          <LimitedBadges limit={10} value={2}>
            Badge
          </LimitedBadges>
        </div>
      </PapperBlock>
    </div>
  );
}

export default BlankPage;
