import { d12 } from "../../models/Dice.enum";

export function D12( className, fillColor, faces ) {

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.331 16"
        fill={ faces === 1 ? 'red' : faces === 12 ? 'green' : fillColor }
        className={ className + ' rot-d' }
      >
         { d12.map((pathList, index) => faces === d12.id ? <path key={index} d={ d12.path } /> :null ) }
      </svg>
    );
  }


