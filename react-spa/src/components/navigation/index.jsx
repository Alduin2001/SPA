import React from "react";
export function Navigation(){
    let link_array = ['Главная','Найти пост','Добавить пост','Регистрация','Авторизация'];
    let show_link = link_array.map(el=>{
        return <a href='' key={el} className="link">{el}</a>;
    });
    
    return(
        <nav>
            {show_link}
        </nav>
    );
}