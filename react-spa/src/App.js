import { Header } from './components/header';
import './index.scss';
import { Navigation } from './components/navigation';
import { useEffect,useState } from 'react';
import { ShowPosts } from './components/posts';
import { SearchingPost } from './components/searching_post';
import { AddingPost } from './components/adding_post';
import { Register } from './components/register';
function App() {
  const [content,setContent] = useState(<ShowPosts/>);
  useEffect(()=>{
    document.querySelectorAll('.link').forEach(el=>{
        el.onclick = (ev)=>{
            ev.preventDefault();
            switch(ev.target.text){
              case 'Добавить пост':
              setContent(<AddingPost/>);
              break;
              case 'Найти пост':
                setContent(<SearchingPost/>);
              break;
              case 'Регистрация':
                setContent(<Register/>);
              break;
              default:
                setContent(<ShowPosts/>);
                break;
            }
             
            
        }
    });
});
  return (
    <div className='App'>
    <Header/>
    <Navigation/>
    <div className='content'>{content}</div>
    </div>
  );
}

export default App;
