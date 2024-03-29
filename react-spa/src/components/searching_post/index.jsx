import React,{useState, useEffect} from "react";
import { ShowPosts, post } from "../posts";
export function SearchingPost(){
    const [postss,setPostss] = useState(null);
    console.log(ShowPosts.post);
    return(
        <section className="searching_post">
            <h1>
                Поиск постов
            </h1>
            <form method="POST">
                <label>
                    <p>Ключевое слово:</p>
                    <input type="text" placeholder="Введите ключевое слово" />
                </label>
                <input type="submit" value="Найти"/>
            </form>
        </section>
    );
}