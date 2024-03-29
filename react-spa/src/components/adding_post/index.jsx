import React, { useState } from "react";
import axios from 'axios';
export function AddingPost() {
    const [header, setHeader] = useState('');
    const [post, setPost] = useState('');
    const [status, setStatus] = useState(null);
    const addPost = async (event) => {
        event.preventDefault();
        
            const response = await axios.post('http://127.0.0.1:8000/myapi/', { header, post })
            .then(res=>{
                setStatus('Пост успешно загружен');
                setHeader('');
                setPost('');
            })
            .catch(err=>setStatus('Не удалось загрузить пост'));
            hideMessage();
    }
    const hideMessage = ()=>{
        setTimeout(()=>{
            setStatus(null);
        },1500);
    }

    return (
        <section className="adding_post">
            <h1>
                Добавление постов
            </h1>
            <form method="POST" onSubmit={addPost}>

                <label>
                    <p>Заголовок поста:</p>
                    <input type="text" placeholder="Введите заголовок поста" value={header} onChange={(e) => setHeader(e.target.value)} />
                </label>

                <label>
                    <p>Пост:</p>
                    <textarea placeholder="Напишите пост..." rows="10" value={post} onChange={(e) => setPost(e.target.value)}></textarea>
                </label>

                <input type="submit" value="Добавить" />
                <p className="status">{status}</p>
            </form>
        </section>
    );
}