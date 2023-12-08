import React from "react";
import {Card,Button} from "antd";
import {Footer} from "./CardItem.styled"
import { Link } from "react-router-dom";

const { Meta } = Card;
const TABLE = "/table/";


const CardItem = (props) => (
    <Card
        hoverable
        style = {{ width: 350, borderRadius: "20px"}}
        cover={
            <img style={{ borderRadius: "20px" }} alt="example" src={props.image} />
        }
    >
    <Meta title={props.title} description={props.text} />
    <p>Size: {props.size}</p>
    <p>Color: {props.color}</p>
        <Footer>
            <p style={{marginTop:10}}>${props.price}</p>

            <Link to={TABLE +`${props.id}`}>
                <Button>Show More</Button>
            </Link>
        </Footer>
    </Card>
)

export default CardItem;
