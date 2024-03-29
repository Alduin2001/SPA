import {makeAutoObservable} from 'mobx'
export default class Post{
    constructor() {
        this._post = []
        makeAutoObservable(this)
    }
    setPosts(post){
        this._post = post
    }
    get post(){
        return this._post
    }
}