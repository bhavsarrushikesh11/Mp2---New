import React, { useState, useMemo } from "react";
import "./Filter.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

const FilterSection = ({ title, children, defaultExpanded = true }) => (
  <Accordion defaultExpanded={defaultExpanded} disableGutters elevation={0}>
    <AccordionSummary expandIcon={<IoIosArrowDown size={20} />}>
      <h5 className="filterHeading">{title}</h5>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

const FilterCheckbox = ({ label, checked, onChange }) => (
  <div className="filterCheckbox">
    <Checkbox checked={checked} onChange={onChange} />
    <label>{label}</label>
  </div>
);

const Filter = () => {
  const [priceRange, setPriceRange] = useState([100, 10000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const productCategories = useMemo(
    () => [
      "Fruits",
      "Vegetables",
      "Grains",
      "Dairy Products",
      "Spices",
      "Handicrafts",
    ],
    []
  );

  const districts = useMemo(
    () => ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Kolhapur"],
    []
  );

  const filteredCategories = useMemo(
    () =>
      productCategories.filter((category) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [productCategories, searchTerm]
  );

  const filteredDistricts = useMemo(
    () =>
      districts.filter((district) =>
        district.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [districts, searchTerm]
  );

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleDistrictChange = (district) => {
    setSelectedDistricts((prev) =>
      prev.includes(district)
        ? prev.filter((d) => d !== district)
        : [...prev, district]
    );
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <div className="filterContainer">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search categories or districts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: <BiSearch size={20} />,
        }}
        className="searchBar"
      />

      <FilterSection title="Product Categories">
        {filteredCategories.map((category, index) => (
          <FilterCheckbox
            key={index}
            label={category}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Districts">
        {filteredDistricts.map((district, index) => (
          <FilterCheckbox
            key={index}
            label={district}
            checked={selectedDistricts.includes(district)}
            onChange={() => handleDistrictChange(district)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Price Range">
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={100}
          max={10000}
          sx={{
            color: "black",
            "& .MuiSlider-thumb": {
              backgroundColor: "white",
              border: "2px solid black",
            },
          }}
        />
        <div className="priceRangeLabels">
          <p>Min Price: ₹{priceRange[0]}</p>
          <p>Max Price: ₹{priceRange[1]}</p>
        </div>
      </FilterSection>
    </div>
  );
};

export default Filter;