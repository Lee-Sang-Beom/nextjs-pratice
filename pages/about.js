import { Button, Divider, Form, Header, Input, List, TextArea } from "semantic-ui-react";

export default function About(){
    return (
        <div>
            <Header as = "h3" style={{paddingTop : 40}} color = "blue">
                편집자 정보 : LeeSangBeom
            </Header>
            <Divider/>
            <List>
                <List.Item>KIT</List.Item>
                <List.Item>학년 : 4</List.Item>
                <List.Item><a href = "https://lee-sang-beom.github.io/">Jekyll 연습</a></List.Item>
            </List>

            <Header as = "h3" style={{paddingTop : 40}} color = "blue">
                문의사항
            </Header>
            <Divider/>
            <Form>
                <Form.Field>
                    <label>제목</label>
                    <Input/>
                </Form.Field>

                <Form.Field>
                    <label>내용</label>
                    <TextArea/>
                </Form.Field>

                <Button color = "orange">보내기</Button>
            </Form>

            <Header as = "h3" style={{paddingTop : 40}} color = "black">
                기타
            </Header>
            <Divider/>
        </div>
    )
}