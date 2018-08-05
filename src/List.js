import React, {Component} from 'react';
import {
    Card,
    Image,
    Segment,
    Progress
} from 'semantic-ui-react';

class List extends Component {
    state = {};

    render() {
        return (
            <div>
                <Card.Group style={{justifyContent: 'space-around'}}>
                    <Card>
                        <Image src='/images/001.jpg' onClick={this.clicktoDetail}/>
                        <Card.Content>
                            <Card.Description>
                                <strong>俪质十八，胶原蛋白低聚肽饮料</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Progress style={{margin: 0, marginTop: 5}} percent='90' indicating/>
                            <Segment.Group horizontal style={{margin: 0, marginTop: 5}}>
                                <Segment>已达90%</Segment>
                                <Segment>已筹88</Segment>
                                <Segment>剩余2天</Segment>
                            </Segment.Group>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='/images/002.jpg'/>
                        <Card.Content>
                            <Card.Description>
                                <strong>网易三音云音箱 极致听音享受</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Progress style={{margin: 0, marginTop: 5}} percent='90' indicating/>
                            <Segment.Group horizontal style={{margin: 0, marginTop: 5}}>
                                <Segment>已达90%</Segment>
                                <Segment>已筹88</Segment>
                                <Segment>剩余2天</Segment>
                            </Segment.Group>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='/images/003.jpg'/>
                        <Card.Content>
                            <Card.Description>
                                <strong>GPD 口袋电脑二代</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Progress style={{margin: 0, marginTop: 5}} percent='90' indicating/>
                            <Segment.Group horizontal style={{margin: 0, marginTop: 5}}>
                                <Segment>已达90%</Segment>
                                <Segment>已筹88</Segment>
                                <Segment>剩余2天</Segment>
                            </Segment.Group>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src='/images/004.jpg'/>
                        <Card.Content>
                            <Card.Description>
                                <strong>茅台集团保健酒业酱香小金瓶</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Progress style={{margin: 0, marginTop: 5}} percent='90' indicating/>
                            <Segment.Group horizontal style={{margin: 0, marginTop: 5}}>
                                <Segment>已达90%</Segment>
                                <Segment>已筹88</Segment>
                                <Segment>剩余2天</Segment>
                            </Segment.Group>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        );
    }
}

export default List;