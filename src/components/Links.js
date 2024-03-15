import React from 'react';

const Links = ({ github, linkedin }) => {
  return (
    <div>
      <h3>
        <a href="https://github.com/ReemBino/react-hooks-props-basics-lab">
          GitHub Repository
        </a>
      </h3>

      <h3>
        <a href="https://www.linkedin.com/">LinkedIn</a>
      </h3>

      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
};

export default Links;
