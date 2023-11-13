import React from "react";
import {Card,Button} from "antd";
import {Footer} from "./CardItem.styled"
const { Meta } = Card;

const CardItem = ({title, text, image, price}) => (
    <Card
        hoverable
        style = {{ width: 350, borderRadius: "20px"}}
        cover={
            <img style={{ borderRadius: "20px" }} alt="example" src={image} />
        }
    >
    <Meta title={title} description={text} />
        <Footer>
            <p style={{marginTop:10}}>${price}</p>
            <Button>Show More</Button>
        </Footer>
    </Card>
)

export default CardItem;
