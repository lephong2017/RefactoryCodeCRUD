import React,{ Component } from 'react';
import DataForm from 'components/form/dataForm';
const listObj =[];
for(let i=0;i<60;i++){
    var obj = {
        id:i,
        name: 'Ho Ly Nha '+i,
        quocTich:"Viet Nam "+i,
    }
    listObj.push(obj);
}
const arrDataOption=[];
for(let i=0;i<30;i++){
    var obj={
        id:i,
        quocTich:"Viet Nam "+i,
    }
    arrDataOption.push(obj);
}
const cols =[
    {
        type:"INPUT",
        keyID:"id",
        label:"Ma Nguoi Dung",
        placeholder:"Nhap ma nguoi dung",
        name:"customerName",
        value:"21",
        action: (e)=>{
            console.log(e.target.value);
        }
    },
    {
        type:"INPUT",
        keyID:"name",
        label:"Ten Nguoi Dung",
        placeholder:"Nhap ten nguoi dung",
        name:"customerName",
        value:"2",
        action: (e)=>{
            console.log(e.target.value);
        }
    },
    {
        type:"SELECT",
        keyID:"quocTich",
        label:"Noi sinh",
        placeholder:"Chon quoc tich",
        name:"quocTich",
        value:"2",
        dataOption:arrDataOption,
        action: (e)=>{
            console.log(e.target.value);
        }
    }
]
export default class extends Component{
    render(){
         return( <div>
            <DataForm columns={cols} listObj={listObj} />
        </div>);
       
    }
}