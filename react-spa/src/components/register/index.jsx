import React, { useState, useEffect } from "react";
export function Register() {

    return (
        <section className="auth">
            <h1>Регистрация</h1>
            <form method="POST">
                <label>
                    <p>Имя:</p><input type="text" placeholder="Имя" />
                </label>

                <label>
                    <p>Фамилия:</p><input type="text" placeholder="Фамилия" />
                </label>

                <label>
                    <p>Логин:</p><input type="text" placeholder="Логин" />
                </label>

                <label>
                    <p>Пароль:</p><input type="password" placeholder="Пароль" />
                </label>
                <input type="submit" value="Зарегистрироваться"/>
            </form>
        </section>
    )
}