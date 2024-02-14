import React from 'react';

const ParagraphComponent = ({ text }) => {
  const paragraphs = text.split('\n\n');

  const renderedParagraphs = paragraphs.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return <div>{renderedParagraphs}</div>;
};

export default ParagraphComponent;
