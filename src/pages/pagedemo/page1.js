import React, {
    Component
} from 'react';
import DataForm from 'components/form/dataForm';
const listObj = [];
for (let i = 0; i < 100; i++) {
    var obj = {
        id: i,
        name: 'Nguyen Van ' + i,
        placeOfBirth: "Quan " + i,
        phoneNumber: '098610912' + i
    }
    listObj.push(obj);
}
const arrDataOption = [];
for (let i = 0; i < 30; i++) {
    var obj = {
        id: i,
        placeOfBirth: "Quan " + i,
    }
    arrDataOption.push(obj);
}
const arrDataOption1 = [];
for (let i = 0; i < 30; i++) {
    var obj = {
        id: i,
        quocTich: "Viet Nam " + i,
    }
    arrDataOption1.push(obj);
}

class DEMO extends React.Component{
    state = {
        phoneNumber: '',
        customerName: '',
        customerId: '',
        quocTich: '',
        placeOfBirth: '',
        col:[]
    };
    componentDidMount(){
        const cols = [
            {
            type: "INPUT",
            keyID: "id",
            label: "Ma Nguoi Dung",
            placeholder: "Nhap ma nguoi dung",
            name: "customerId",
            value: "21",
            action: this.test,
            },
            {
                type: "INPUT",
                keyID: "name",
                label: "Ten Nguoi Dung",
                placeholder: "Nhap ten nguoi dung",
                name: "customerName",
                value: "2",
                action: this.test,
            },
            {
                type: "SELECT",
                keyID: "quocTich",
                label: "Quoc tich",
                placeholder: "Chon noi sinh",
                name: "quocTich",
                value: "2",
                dataOption: arrDataOption1,
                action:this.test,
            },
            {
                type: "DATALIST",
                keyID: "placeOfBirth",
                label: "Noi sinh",
                placeholder: "Chon noi sinh",
                name: "placeOfBirth",
                value: "2",
                dataOption: arrDataOption,
                action:this.test,
            },
            {
                type: "NUMBER",
                keyID: "phoneNumber",
                label: "So dien thoai",
                placeholder: "Nhap so dien thoai",
                name: "phoneNumber",
                value: "2",
                action: this.test,
               
            },
    ]
        this.setState({col:cols});
    }
    test=(e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        },()=>{console.log(this.state[name])});
    };
    handelSubmit=(e)=>{
        e.preventDefault();
        console.log("data submit when click send");
        var obj ={
            customerId: this.state.customerId,
            customerName:this.state.customerName,
            placeOfBirth:this.state.placeOfBirth,
            quocTich:this.state.quocTich,
            phoneNumber:this.state.phoneNumber
        }
        console.log(obj);
    };
    render(){
         return ( 
            <div>
                <form onSubmit={this.handelSubmit}>
                    <DataForm columns={this.state.col} listObj={listObj} />
                    <button type="submit">Send</button>
                </form> 
            </div>
        );

    }
}
export default DEMO;