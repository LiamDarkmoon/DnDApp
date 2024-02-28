export function D6({ className, fillColor, faces }) {
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 15.991"
        fill={ faces === 1 ? 'red' : faces === 6 ? 'green' : fillColor }
        className={ className + ' rot-d' }
      >
         { pathList.map((pathList, index) => faces === pathList.id ? <path key={index} d={ pathList.path } /> :null ) }
      </svg>
    );
  }

  export default D6;

