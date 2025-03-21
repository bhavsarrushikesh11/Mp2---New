import React from "react";
import "./Instagram.css";

const foodImages = [
    "https://i.pinimg.com/736x/d3/a7/28/d3a7289d444034d938066c0f04ded60f.jpg", // lychee
    "https://i.pinimg.com/474x/7a/57/30/7a573047d0c690bee9a073af6193109b.jpg",   // Custurd Apple
    "https://i.pinimg.com/474x/03/9d/21/039d217dac73945bd1fdc80f53fc52ff.jpg",     // Elaychi
    "https://i.pinimg.com/474x/dc/04/4f/dc044f2e5d032372ed259130b68d84fa.jpg",   // Tomato
    "https://i.pinimg.com/474x/44/a4/d0/44a4d077b2435331c1bb8f33280c1d43.jpg",   // watermelon
    "https://i.pinimg.com/474x/42/6a/74/426a74adf91110730675ec2a0c322eae.jpg",   // Grill maize
    "https://i.pinimg.com/474x/b7/a1/53/b7a1530d2dd669864cff727371bfb201.jpg",   // Mangoes
    "https://i.pinimg.com/474x/f5/30/d4/f530d4d2d863970a18bfb1bb76375b7e.jpg",   // Copy Seeds
    "https://i.pinimg.com/474x/d2/f1/df/d2f1df884bb57cfacd9724106238d6c0.jpg",   // Spice
    "https://i.pinimg.com/474x/fc/69/75/fc6975bd4cafcd234d16cb55d1d38135.jpg",   // Cabbage
    "https://i.pinimg.com/474x/4f/01/b2/4f01b2adc5046c0764f51d5e439e87a4.jpg",   // Dairy Product
    "https://i.pinimg.com/474x/88/83/ef/8883ef0c3a30ef2a705a58191ba8ad95.jpg"      // Honey
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
