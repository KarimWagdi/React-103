import img_2 from '../../assets/react-core-concepts.png'
 export default function Header(){
    let lecHead = ['fundementals' , 'props' , 'core']
  
    function random (max){ 
      return Math.trunc(Math.random()* (max + 1))
    }
  
    const lec = lecHead[random(2)]
  
    return(
    <header>
          <img src={img_2} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {lec} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
  }