export const pokeUrl = (id) => {
  if (id) {
    const baseURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other";
    return `${baseURL}/official-artwork/${id}.png`;
  }
};

export const betterId = (id) => {
  if (id) {
    return id.toString().padStart(3, "0");
  }
};

export const toCamelCase = (str) => {
  if (str) {
    const splitStr = str.split("");
    const camelCase = splitStr.map((word, i) => {
      if (i === 0) {
        return word.toUpperCase();
      } else {
        return word.charAt(0).toLowerCase();
      }
    });
    return camelCase.join("");
  }
};

export const bgColorCard = (type, isTag, isText) => {
  if (type) {
    switch (type[0]?.type.name) {
      case "grass":
        if (isTag) {
          return "bg-emerald-300";
        } else if (isText) {
          return "text-emerald-600";
        } else {
          return "bg-emerald-400";
        }
      case "fire":
        if (isTag) {
          return "bg-red-300";
        }
        if (isText) {
          return "text-red-600";
        }
        return "bg-red-400";
      case "water":
        if (isTag) {
          return "bg-blue-300";
        }
        if (isText) {
          return "text-blue-600";
        }
        return "bg-blue-400";
      case "bug":
        if (isTag) {
          return "bg-green-300";
        }
        if (isText) {
          return "text-green-600";
        }
        return "bg-green-400";
      case "normal":
        if (isTag) {
          return "bg-gray-300";
        }
        if (isText) {
          return "text-gray-600";
        }
        return "bg-gray-400";
      case "poison":
        if (isTag) {
          return "bg-purple-300";
        }
        if (isText) {
          return "text-purple-600";
        }
        return "bg-purple-400";
      case "electric":
        if (isTag) {
          return "bg-yellow-300";
        }
        if (isText) {
          return "text-yellow-600";
        }
        return "bg-yellow-400";
      case "ground":
        if (isTag) {
          return "bg-yellow-300";
        }
        if (isText) {
          return "text-yellow-600";
        }
        return "bg-yellow-400";
      case "fairy":
        if (isTag) {
          return "bg-pink-300";
        }
        if (isText) {
          return "text-pink-600";
        }
        return "bg-pink-400";
      case "fighting":
        if (isTag) {
          return "bg-red-300";
        }
        if (isText) {
          return "text-red-600";
        }
        return "bg-red-400";
      case "psychic":
        if (isTag) {
          return "bg-pink-300";
        }
        if (isText) {
          return "text-pink-600";
        }
        return "bg-pink-400";
      case "rock":
        if (isTag) {
          return "bg-yellow-300";
        }
        if (isText) {
          return "text-yellow-600";
        }
        return "bg-yellow-400";
      case "ghost":
        if (isTag) {
          return "bg-purple-300";
        }
        if (isText) {
          return "text-purple-600";
        }
        return "bg-purple-400";
      case "ice":
        if (isTag) {
          return "bg-blue-300";
        }
        if (isText) {
          return "text-blue-600";
        }
        return "bg-blue-400";
      case "dragon":
        if (isTag) {
          return "bg-purple-300";
        }
        if (isText) {
          return "text-purple-600";
        }
        return "bg-purple-400";
      case "dark":
        if (isTag) {
          return "bg-gray-300";
        }
        if (isText) {
          return "text-gray-600";
        }
        return "bg-gray-400";
      case "steel":
        if (isTag) {
          return "bg-gray-300";
        }
        if (isText) {
          return "text-gray-600";
        }
        return "bg-gray-400";
      case "flying":
        if (isTag) {
          return "bg-blue-300";
        }
        if (isText) {
          return "text-blue-600";
        }
        return "bg-blue-400";
      default:
        return "bg-gray-400";
    }
  }
};

export const test = () => {
  return "prueba";
};
