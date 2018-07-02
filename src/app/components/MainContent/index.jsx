import React from 'react';
import { any, arrayOf, shape } from 'prop-types';
import headline from '../Headline';
import text from '../Text';

const Blocks = {
  headline,
  text,
};

const render = ({ blocks }) =>
  blocks.map(block => {
    const { type, blockId } = block;
    const blockString = JSON.stringify(block);

    const Block = Blocks[type];

    return (
      <Block {...block.model} key={blockId} />
    );
  });

const MainContent = ({ data }) => {
  const renderedContent = render(data);
  return (
    <div>
      {renderedContent}
    </div>
);
};

MainContent.propTypes = {
  data: shape({
    model: shape({
      blocks: arrayOf(any),
    }),
  }).isRequired,
};

export default MainContent;
