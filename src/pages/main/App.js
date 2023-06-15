import './App.css';
import UserCard from '../../componentes/UserCard';
import NavBar from '../../componentes/NavBar';

function App() {
  return (
    <div className='container'>
      <NavBar/>
      <UserCard
      name={'Beijar-flor'}
      imagem="https://cdn.pixabay.com/photo/2016/11/14/15/29/hummingbird-1823829_1280.jpg"/>
      <UserCard
      name={'Medusa'}
      imagem="https://cdn.pixabay.com/photo/2019/09/23/04/50/jellyfish-4497496_1280.jpg"/>
      <UserCard
      name={'Mulher'}
      imagem="https://cdn.pixabay.com/photo/2023/03/13/23/48/woman-7851024_1280.jpg"/>
       <UserCard
      name={'Gato'}
      imagem="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"/>
    </div> 
    )
}
export default App;
