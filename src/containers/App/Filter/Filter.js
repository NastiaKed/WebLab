// import React from "react";
// import { StyledFilterBlock, FiltersWrapper, StyledButton, StyledSelect } from "./Filter.styled";

// const filters = [{
//     title: "Name",
//     option: ["a", "b"]
// },
// {
//     title: "Weight",
//     option: ["heavy", "light"]
// },
// {
//     title: "Price",
//     option: ["cheaper", "more expensive"]
// }];


// const Filter = () => {
//     return (
//     <StyledFilterBlock>
//         <FiltersWrapper>
//         {filters.map((filter, index) => (
//             <StyledSelect
//                 key={index}
//                 value={filter}
//                 dropdownRender={() => (
//                 <div>
//                     {filters.map((option, optionIndex) => (
//                         <div key={optionIndex}>{option}</div>
//                     ))}
//                 </div>
//                 )}
//             />
//         ))}
//         </FiltersWrapper>

//         <StyledButton>Apply</StyledButton>
//     </StyledFilterBlock>
//     );
// };

// export default Filter;


import React from "react";
import { StyledFilterBlock, FiltersWrapper, StyledButton, StyledSelect } from "./Filter.styled";

const filters = [
    {
    title: "Name",
    options: ["a-z", "z-a"],
    },
    {
    title: "Weight",
    options: ["heavy", "light"],
    },
    {
    title: "Price",
    options: ["cheaper", "more expensive"],
    },
];

const Filter = () => {
    return (
    <StyledFilterBlock>
        <FiltersWrapper>
        {filters.map((filter, index) => (
            <StyledSelect
            key={index}
            value={filter.title}
            dropdownRender={() => (
                <div>
                {filter.options.map((option, optionIndex) => (
                    <div key={optionIndex}>{option}</div>
                ))}
                </div>
            )}
            />
        ))}
        </FiltersWrapper>

        <StyledButton>Apply</StyledButton>
    </StyledFilterBlock>
    );
};

export default Filter;
