export function D4({ className, fillColor, faces }) {
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 14.126"
        fill={ faces === 1 ? 'red' : faces === 4 ? 'green' : fillColor }
        className={ className + ' rot-d' }
      >
         { pathList.map((pathList, index) => faces === pathList.id ? <path key={index} d={ pathList.path } /> :null ) }
      </svg>
    );
  }

export default D4;

