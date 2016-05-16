export default function dateFormatter(str){
  if(!str) return '';
  let date = new Date(str);
  return isNaN(date.getDate()) ?
    str :
    date.toISOString().substr(0,10).split('-').reverse().join('/');
  // .toLocaleDateString('en-GB') is not working consistently
}
