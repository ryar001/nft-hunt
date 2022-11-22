export default function ConvertStringToHex(str) {
    /* convert string to hex, takes in a string*/
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      arr[i] = (str.charCodeAt(i).toString(16)).slice(-4);
    }
    return arr.join("");
  }