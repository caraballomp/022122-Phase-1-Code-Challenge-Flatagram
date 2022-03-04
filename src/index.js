// write your code here
let woofAPI = `http://localhost:3000/images`
let woofyAPI = ` http://localhost:3000/comments`

const imageAPI = async () => {
  const response = await fetch(woofAPI);
  const jsondata = await response.json();
  return jsondata;
}
//getting my data for imagees 

const imageData = async () => {
  const data = await imageAPI();
  const titlePup = document.querySelector(".title")
  const imgPup = document.querySelector("#card-image")

  titlePup.innerText = data[0].title
  imgPup.src = data[0].image
  const likes = document.querySelector('#like-count')
  likes.innerText = `${data[0].likes} likes`
  //   console.log(data[0].likes)
}
//   console.log(data);}
  imageData()

//made a separate file for the comments not to get confuse 
  const commentAPI = async () => {
    const response = await fetch(woofyAPI);
    const jsondata = await response.json();
    return jsondata;
  }
  
  const commentData = async () => {
    const data = await commentAPI();
    // console.log(data)
    
    data.forEach(element => {
    const commentsList = document.querySelector('#comments-list')

    // with the li added each element just a clearer understanding on my behalf each <li>child 
    const first = document.querySelector('#comments-list li:nth-child(1)')
    first.innerText = data[0].content
    const second = document.querySelector('#comments-list li:nth-child(2)')
    second.innerText = data[1].content
    const third = document.querySelector('#comments-list li:nth-child(3)')
    third.innerText = data[2].content
    });

}
    // console.log(data);}
    commentData()