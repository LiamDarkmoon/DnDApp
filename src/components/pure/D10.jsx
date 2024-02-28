export function D10({ className, fillColor, faces }) {

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.138 16"
        fill={ faces === 1 ? 'red' : faces === 10 ? 'green' : fillColor }
        className={ className + ' rot-d' }
      >
         { pathList.map((pathList, index) => faces === pathList.id ? <path key={index} d={ pathList.path } /> :null ) }
      </svg>
    );
  };

  export default D10;

