export function D8({ className, fillColor, faces }) {

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14.181 16"
        fill={ faces === 1 ? 'red' : faces === 8 ? 'green' : fillColor }
        className={ className + ' rot-d' }
      >
         { pathList.map((pathList, index) => faces === pathList.id ? <path key={index} d={ pathList.path } /> :null ) }
      </svg>
    );
  }

  export default D8;

