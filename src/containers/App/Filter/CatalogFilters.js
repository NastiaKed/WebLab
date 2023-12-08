import React from 'react';
import Select from "./Select";
import Search from "./Search";
import "./Filter.styled";
import { StyledBlock, CatalogFiltersBox} from './Filter.styled';

const CatalogFilters = ({filters, handleApplyFilter }) => {
    
    const handleFilterChange = (event) => {
      console.log("Фільтр змінено");
      const { name, value } = event.target;
      handleApplyFilter((prevFilters) => ({ ...prevFilters, [name]: value }));
    };
  
    
    const colorOptions = [
      { label: "All", value: "all" },
      { label: "White", value: "white" },
      { label: "Black", value: "black" },
      { label: "Brown", value: "brown" },
    ];
  
    const priceOptions = [
      { label: "All", value: "all" },
      { label: "Cheap", value: "cheap" },
      { label: "Average", value: "average" },
      { label: "Expensive", value: "expensive" },
    ];
  
    const sizeOptions = [
      { label: "All", value: "all" },
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
    ];
  
    return (
      <StyledBlock>
        <CatalogFiltersBox style={{marginLeft: 80, justifyContent: 'space-around'}}>
          <Search style={{wigth: 100, height: 20}} searchValue={filters.title} handleSearchValueChange={handleFilterChange}/>
          <label htmlFor="color-filter" style={{marginLeft: 80, justifyContent: 'space-around', fontSize: 18}}>
            Color:
            <Select
              id="color-filter"
              name="color"
              onChange={handleFilterChange}
              options={colorOptions}
            />
          </label>
    
          <label htmlFor="price-filter" style={{marginLeft: 80, justifyContent: 'space-around', fontSize: 18}}>
            Price:
            <Select
              id="price-filter"
              name="price"
              onChange={handleFilterChange}
              options={priceOptions}
            />
          </label>
    
          <label htmlFor="size-filter" style={{marginLeft: 80, justifyContent: 'space-around', fontSize: 18}}>
            Size:
            <Select
              id="size-filter"
              name="size"
              onChange={handleFilterChange}
              options={sizeOptions}
            />
          </label>
        </CatalogFiltersBox>
      </StyledBlock>
    );
  };
  
  export default CatalogFilters;