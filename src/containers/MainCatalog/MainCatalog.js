import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import { useState, useEffect } from "react";
import { getAllTables, getFilteredTables} from "../../server";
import { CardWrapper } from "../Home/Home.styled";
import CircleLoader from "../App/CircleLoader/CircleLoader";
import {Button} from "antd";

const MainCatalog = ({filters, tablesList})=>{
    const [filtersApplied,setFiltersApplied] = useState(true)
    const [isLoading, setIsLoading] = useState(false);
    const [filteredTables, setFilteredTables] = useState(tablesList);

    const handleApplyFilter = () => {
        setFiltersApplied(true)
    }

    useEffect(() => {
        
        const fetchFilterTables = async () => {
            try {
                console.log(filters)
                const result = await getFilteredTables(filters);
                console.log(result)
                setFilteredTables(result);
                setFiltersApplied(false)
            } catch (error) {
                console.error("filtering error:", error);
            }
        };

        if (filtersApplied) {
            fetchFilterTables();
            setFiltersApplied(false)
        }
    }, [filters, filtersApplied]);

        return(

            <div>
                <div style={{display: "flex", justifyContent: "right", marginBottom: 80, marginRight: 150}}>
                    <Button onClick={handleApplyFilter}>Apply</Button>
                </div>

            <CardWrapper>
            {filteredTables.map((table)=>(
                <CardItem 
                    key={table.id}
                    title={table.title}
                    text={table.text}
                    image = {table.image}
                    price={table.price}
                    size={table.size}
                    color={table.color}
                    id={table.id}
                />
            ))}
            </CardWrapper>
            {isLoading ?<CircleLoader/>:""}
        </div>
    )
}

export default MainCatalog