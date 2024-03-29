import React,{useState,useEffect} from 'react';
export function EditPost(props){
    const [header,setHeader] = useState(props.header);
    const [post,setPost] = useState(props.post);
    
    return(
        <section className='editing_post'>
            <h1>Форма изменения поста</h1>
        <form>
            <input type="hidden" value={props.id} />
            <input type="text" placeholder="Заголовок" onChange={(ev)=>setHeader(ev.target.value)} value={header} />
            <textarea onChange={(ev)=>setPost(ev.target.value)} value={post} placeholder="Пост" rows="5"></textarea>
            <div className='btns'>
            <input type="submit" value="Поменять"/>
            <input type="button" id="close" value="Закрыть"/>
            </div>
        </form>
        </section>
    );
}