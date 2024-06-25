export default function isNumber(item) {
    const number = Number(item);
    return !isNaN(number) && item.trim() !== '';
}
