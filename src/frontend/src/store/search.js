import axios from 'axios'

const state = {
    context : "http://localhost:5000/"
}
const action = {
    async list({commit},data){
        axios.get(state.context + `list` + data,{
            authorization: "JWT fefege..",
            Accept:"application/json",
            "Content-type": "application/json"
        })
            .then((data)=>{
                alert("액션 자바 데이터받아옴")
                commit("SEARCH",data)
            })
            .catch(()=>{
                alert("자바 통신실패 액션통신불가")
            })
    }
}
const  mutation = {}
const  getter = {}

export  default {
    name : 'search',
    namespaced : true,
    action,
    mutation,
    getter
}