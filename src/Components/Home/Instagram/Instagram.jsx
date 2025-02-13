import React from "react";
import "./Instagram.css";

const foodImages = [
    "https://images.pexels.com/photos/161559/vegetables-broccoli-potatoes-onions-161559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Vegetables
    "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",   // Assorted Fruits
    "https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",     // Dairy Products
    "https://images.pexels.com/photos/760148/pexels-photo-760148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",   // Apples
    "https://images.pexels.com/photos/416772/pexels-photo-416772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",   // Bananas
    "https://images.pexels.com/photos/672751/pexels-photo-672751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",   // Pomegranate
    "https://images.pexels.com/photos/692036/pexels-photo-692036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",   // Variety of Vegetables
    "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",   // Grapes
    "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",   // Mango
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",   // Leafy Greens
    "https://images.pexels.com/photos/5947970/pexels-photo-5947970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",   // Kiwi
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"      // Milk
];

const Instagram = () => {
    return (
        <>
            <div className="instagram">
                <h2>#ODOPFood</h2>
                <div className="instagramTiles">
                    {foodImages.map((imageUrl, index) => (
                        <div className="instagramtile" key={index}>
                            <img src={imageUrl} alt={`Food ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Instagram;
