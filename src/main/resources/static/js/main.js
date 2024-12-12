'use strict';
const usernamePage=document.querySelector('#username-page');
const chatPage = document.querySelector('#chat-page');
const usernameForm= document.querySelector('#usernameForm');
const messageForm= document.querySelector('#messageForm');
const messageInput=document.querySelector('#message');
const connectingElement = document.querySelector('.connecting');
const chatArea= document.querySelector('#chat-messages');
const logout= document.querySelector('#logout');

let stompClient=null;
let nickname=null;
let fullname=null;
let selectedUser=null;

function connect(event){
    nickname=document.querySelector('#nickname');
    fullname=document.querySelector('#fullname');
    if (nickname && fullname){
        usernamePage.classList.add('hidden');
        chatPage.classList.remove('hidden');
        const socket= new SockJs('/ws');
    }
    event.preventDefault();
}