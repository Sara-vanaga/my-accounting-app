import React from 'react';
import { Global, css } from '@emotion/react';

function App() {
  return (
    <>
      <Global
        styles={css`
          html {
            direction: rtl;
          }
        `}
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold">سلام دنیا</h1>
        {/* محتوای برنامه */}
      </div>
    </>
  );
}

export default App;