import { TextField,Box,Button } from "@mui/material";
import React from "react";
import {useState, useEffect} from 'react';

export default function UserList() {
    //useStateを3つ定義
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [addUserText,setAddUserText] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");

    //ユーザー削除機能
    function handleDeleteUser(userId){
        const newUsers = users.filter((user)=> user.advertiserId !== userId);
        setUsers(newUsers);

    }

    //ユーザー追加機能
    function handleAddUser(){
        const newUser = {advertiserId : Date.now(), Name: addUserText}
        const newUsers = [...users,newUser ]
        setUsers(newUsers);
        setAddUserText("");

    }

    //ユーザー読み込み機能
    //useEffectで初回だけfeftch
    useEffect(()=>{
        async function getUsers() {
            try {
                setIsLoading(true)
                const response = await fetch('https://m5uualaa81.execute-api.ap-northeast-1.amazonaws.com/prod/advertisers')
                const data = await response.json();
                setUsers(data);
                console.log(data);
            } catch (e) {
                setError(e);
            }
            finally {
                setIsLoading(false);
            }   
        }
        getUsers();
    },[])

    //ユーザー名の変更機能
    //編集ボタン押下時
    function handleEditUser(userId,userName){
        //選択したユーザーIDのユーザー名をテキストとしてセットする
        setEditingId(userId)
        setEditingText(userName)
    };

    //保存ボタン押下時
    function handleSaveUser(){
        //編集したユーザーIDが一致する名前を変更するユーザーだけ更新してUser配列を作り直す
        let newUsers = users.map((user)=>{
            if (user.advertiserId == editingId){
                return {...user, Name: editingText};
            } else {
                return user;
            }
        });
        setUsers(newUsers);

        //editingId、editingtextのusestateを空にする
        setEditingText("")
        setEditingId(null)
    }




    //if文で画面を出し分ける
    if(isLoading) return <p>読み込み中...</p>
    if(error) return <p>エラーが発生しました...</p> 

    return (
        <>
        <Box>
            <TextField
            value={addUserText}
            onChange={(e)=> setAddUserText(e.target.value)}
            />
            <Button
                onClick={handleAddUser}
            >
                追加
            </Button>
        </Box>


        <ul>
            {users.map((user)=> {
                if(user.advertiserId == editingId){
                    return(
                        <li key={user.advertiserId}>
                        <TextField
                            variant="outlined"
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                        />
                            <button onClick={() => handleSaveUser(user.advertiserId)}>
                                保存
                            </button>
                        </li>
                    )

                }else{
                    return(
                        <li key={user.iadvertiserIdd}>
                            {user.Name}
                            <button onClick={() => handleEditUser(user.advertiserId,user.Name)}>
                                編集
                            </button>
                        </li>
                    )

                }

            })}
        </ul>
        </>
    )
}
