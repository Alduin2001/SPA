import React, { useState, useEffect, useRef } from 'react';
import { Scaled } from '../scale_post';
import axios from 'axios';
import { EditPost } from '../edit_post';
export function ShowPosts() {

    const [scaled_post, setScaledPost] = useState(null);

    const [post, setPost] = useState([])

    const [edit_post_form,setEditPostForm] = useState(null);

    const ref = useRef();

    const refchange = useRef();

    useEffect(() => {
        getPost();
    }, [])

    const getPost = (data) => {
        axios.get('http://127.0.0.1:8000/myapi/')
            .then(res => {
                setPost(res.data)
            })
            .catch(err => console.log(err));
    }
    //Creating function to delete from DB
    const deletePost = async (id)=>{
        await axios.delete(`http://127.0.0.1:8000/myapi/${id}`)
        .then(console.log('Удалено'))
        .catch(err=>console.log(err));
    }
    //Create function to delete from browser
    const deleteFromClient = (key)=>{
        ref.current.parentNode.parentNode.remove();
        deletePost(key);
    }
    //Open form to change
    const openChanger = (id,header,post)=>{
        console.log(`ID:${id},header:${header}, post: ${post}`);
        setEditPostForm(<EditPost id={id} header={header} post={post} />);
    }

    useEffect(() => {
        if (scaled_post != null) {
            document.querySelector('.scaled').onclick = () => setScaledPost(null);
        }

        //Post-item click
        document.querySelectorAll('.post-item h1').forEach(el => {
            el.onclick = (ev) => {
                console.log('Clicked');
                setScaledPost(<Scaled header={ev.target.innerHTML} post={ev.target.nextSibling.innerHTML} />);
            }

        });
    })
    useEffect(()=>{

        //Close edit form
    if(document.querySelector('#close')!==null){
        document.querySelector('#close').onclick = ()=>{
            setEditPostForm(null);
        }
    }   

    },[]);
    let posts = post.map(el =>{
        return <div key={el.id} className='post-item'>          
        <h1>{el.header}</h1>
        <p>{el.post}</p>
        <div className='btns'>
        <p className='change-post' ref={refchange} onClick={()=>openChanger(el.id,el.header,el.post)}>Поменять</p>
        <p className='delete-post' ref={ref} onClick={()=>deleteFromClient(el.id)}>Удалить</p>
        </div>
        </div>;

    })

    return (
        <section className='posts'>
            {scaled_post}
            <h1>Посты</h1>
            <div className="post-flex">
                {edit_post_form}
                {posts}

            </div>
        </section>
    );
}