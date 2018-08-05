import React, {Component} from 'react';
import List from './List';
import {Message, Input,Menu, Container,activeItem} from 'semantic-ui-react'

class App extends Component {
    state = {
        activeItem: 'home',
    };
    //分类跳转
    handleItemClick = (e, {name}) => this.setState({activeItem: name});
    //跳转至详情页面
    clicktoDetail = () =>{
        window.location.href='';
    };
    //渲染页面
    render(){
        const { activeItem } = this.state;
        return (
            <div style={{padding: 15}}>
                <Container style={{width:'80%'}}>
                    <Message style={{textAlign: 'center', lineHeight: '100%', backgroundColor: 'grey:#fff', paddingTop: '25px'}}>
                        <Message.Header style={{fontSize: 40, fontColor: 'red'}}>京西众筹</Message.Header><br/>
                        <p>智能合约部署的众筹项目</p>
                    </Message>
                    <Menu secondary>
                        <Menu.Item name='全部' active={activeItem === '全部'} onClick={this.handleItemClick}/>
                        <Menu.Item name='科技' active={activeItem === '科技'} onClick={this.handleItemClick}/>
                        <Menu.Item name='家电' active={activeItem === '家电'} onClick={this.handleItemClick}/>
                        <Menu.Item name='美食' active={activeItem === '美食'} onClick={this.handleItemClick}/>
                        <Menu.Item name='娱乐' active={activeItem === '娱乐'} onClick={this.handleItemClick}/>
                        <Menu.Item name='设计' active={activeItem === '设计'} onClick={this.handleItemClick}/>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...'/>
                            </Menu.Item>
                            <Menu.Item name='搜索' active={activeItem === '搜索'} onClick={this.handleItemClick}/>
                        </Menu.Menu>
                    </Menu>
                    <List/>
                </Container>
            </div>
        );
    }
}

export default App;
