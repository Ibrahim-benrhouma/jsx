import './App.css';
import image from './aaaaax.jpg'  

function App() {
  return (
    <div className="App">
   <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Peaky Blinders</h1>
          <br />
          <img  src={image}    />
          <br />
          <img src="/peaky.jpg" />
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ruyl8_PT_y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>





   
   
   
   
   






    </div>
  );
}

export default App;
