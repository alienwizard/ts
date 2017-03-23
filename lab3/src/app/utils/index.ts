
export function getContrastYIQ(hexcolor) {
let r = parseInt(hexcolor.substr(0, 2), 16);
let g = parseInt(hexcolor.substr(2, 2), 16);
let b = parseInt(hexcolor.substr(4, 2), 16);
let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
console.log(yiq);
console.log(hexcolor);
return (yiq >= 128) ? "black" : "white";
}

type asyncComponentProps = {

}

interface AsyncComponentState {
    Component: Element
}
