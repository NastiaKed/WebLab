import {React,useState, useEffect} from "react";
import MainCatalog from "../../MainCatalog/MainCatalog";
import CatalogFilters from "../Filter/CatalogFilters";
import CircleLoader from "../../App/CircleLoader/CircleLoader";
import CatalogHeader from "./CatalogHeader";

import { getAllTables } from "../../../server";

const Catalog = ()=>{
        const [filters, setFilters] = useState({title:"", color: "all", price: "all", size: "all"});
        const [tables,setTables] = useState([]);
        const [isLoading, setIsLoading] = useState(false);

        const handleApplyFilter = (newFilters) => {
            setFilters(newFilters);
    };

    useEffect(()=>{
        setIsLoading(true);
        getAllTables().then((tables)=>{
            setTables(tables)
            setIsLoading(false);
        }
        )
    },[])

        return(
            <div>
                <CatalogHeader/>
                <CatalogFilters filters={filters} handleApplyFilter={handleApplyFilter}/>
                {isLoading ? <CircleLoader/> : ''}
                {/* <Filter/> */}
                <MainCatalog filters={filters} tablesList = {tables}/> 
            </div>
        )

}
export default Catalog