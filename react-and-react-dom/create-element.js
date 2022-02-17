const myElement = React.createElement('p', {id: 'judul'}, 'Halo Chelsea');
console.log(myElement);

ReactDOM.render(myElement, document.getElementById('root'));

const myImage = React.createElement('img', {src: 'https://i.pinimg.com/550x/20/42/6d/20426d250e8764883c927bfa362186e3.jpg'}, null);
ReactDOM.render(myImage, document.getElementById('image'));