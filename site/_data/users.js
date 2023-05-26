module.exports = async function () {
  return (await (await fetch('https://randomuser.me/api/?results=10', {headers: {'Content-Type': 'application/json'}})).json()).results;
}
