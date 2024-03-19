import { CartProvider, useCart } from "react-use-cart";
import { Container, Row, Col } from 'reactstrap';

function Page() {
    const { addItem } = useCart();

    const products = [
        {

            "features": "MacBook Air Laptop M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray",
            "image_url": "/images/shopping/labtops/apple/Apple-Macbook-Pro-13_-5-e1597745110243.png",
            "name": "Apple 2020 MacBook",
            "price": 689,
            "id": 1,
        },
        {
            "features": "MacBook Pro Laptop M3 chip with 8‑core CPU, 10‑core GPU: 14.2-inch Liquid Retina XDR Display, 8GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Space Gray",
            "image_url": "/images/shopping/labtops/apple/c595c9dc092cb7fbfecedde02a6952ae.png",
            "name": "Apple 2023 MacBook",
            "price": 500,
            "id": 2,
        },
        {
            "features": "MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Midnight",
            "image_url": "/images/shopping/labtops/apple/MacBook_Notebook_Computer_PNG_Clipart-749.png",
            "name": "Apple 2022 MacBook",
            "price": 500,
            "id": 3,
        },
        {
            "features": "MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Starlight",
            "image_url": "/images/shopping/labtops/apple/macbook_PNG35.png",
            "name": "Apple 2023 MacBook",
            "price": 500,
            "id": 4,
        },
        {
            "features": "MacBook Air Laptop M1 Chip, 13” Retina Display, 8-Core CPU, 7-Core GPU, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, FaceTime HD Camera. Works with iPhone/iPad; Space Gray",
            "image_url": "/images/shopping/labtops/apple/macbook_PNG101747.png",
            "name": "Apple 2020 MacBook",
            "price": 500,
            "id": 5,
        },
        {
            "features": "MacBook Pro Laptop M3 Pro chip with 12‑core CPU, 18‑core GPU: 16.2-inch Liquid Retina XDR Display, 18GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Space Black",
            "image_url": "/images/shopping/labtops/apple/macbook-pro-m1-14-header.png",
            "name": "Apple 2023 MacBook",
            "price": 500,
            "id": 6,
        },
        {
            "features": "14 Laptop, 14 FHD(1920 x 1200) Display, AMD Ryzen 7 5825U Processor(8-core), 16GB RAM, 512GB SSD, AMD Radeon Graphics, Wi-Fi 6, Bluetooth, Window 11 Pro, Pebble Green",
            "image_url": "/images/shopping/labtops/dell/4MdfxeCXns9oQps7zkmXjf.png",
            "name": "Dell 2023 Newest Inspiron 14",
            "price": 500,
            "id": 7,
        },
        {
            "features": "13.3 Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 512GB SSD + 32GB Optane - Silver - i7300-5395SLV-PUS",
            "image_url": "/images/shopping/labtops/dell/774-7748947_leptop-png.png",
            "name": "Dell - Inspiron 13 7000 ",
            "price": 679,
            "id": 8,
        },
        {
            "features": "7320 13.3 Notebook - Full HD - 1920 x 1080 - Intel Core i7 11th Gen i7-1180G7 Quad-core (4 Core) 2.20 GHz - 16 GB Total RAM - 512 GB SSD - Carbon Fiber",
            "image_url": "/images/shopping/labtops/dell/Dell-Laptop-PNG-Picture.png",
            "name": "Dell Latitude 7000 7300",
            "price": 500,
            "id": 9,
        },
        {
            "features": "Laptop, 15.6 FHD+ 500 Nits Display, Intel i7-11800H, RTX 3050Ti, 32GB RAM, 1TB SSD, IR Webcam, Backlit Keyboard, Fingerprint Reader, WiFi 6, Thunderbolt 4, Win 11 Home",
            "image_url": "/images/shopping/labtops/dell/dg7700nt_cnb_05000ff090_bk-1480x1206.png",
            "name": "Dell Newest XPS 15 9510 Elite",
            "price": 1870,
            "id": 10,
        },
        {
            "features": "- 17.3 FHD AG Display - 5.5Ghz Intel Core i9-13950HX 24-Core - 128GB CAMM RAM - NV RTX 5000 Ada (16GB GDDR6) - 2TB SSD - Windows 11 Pro",
            "image_url": "/images/shopping/labtops/dell/laptop-transparent-png-13.png",
            "name": "Dell Precision 7780 Mobile Workstation",
            "price": 4950,
            "id": 11,
        },
        {
            "features": "14.5â€ 16:10 Touch Display, 120Hz Refresh Rate, ScreenPad Plus, Intel i9-13900H CPU, NVIDIA® Geforce RTX 4050, 32GB RAM, 1TB SSD, Windows 11 Home, Tech Black, UX8402VU-AS96T",
            "image_url": "/images/shopping/labtops/asus/33378-2-asus-laptop-transparent.png",
            "name": "ASUS Zenbook Pro 14 Duo",
            "price": 500,
            "id": 12,
        },
        {
            "features": "Laptop, 13.3â€ OLED 2.8K Display, Intel Evo Certified, i7-1355U CPU, Intel® Iris Xe Graphics, 32GB RAM, 1TB SSD, Windows 11 Pro, Basalt Grey, UX5304VA-XS76T",
            "image_url": "/images/shopping/labtops/asus/asus-rog-zephyrus-duo.png",
            "name": "ASUS Zenbook S 13 OLED Ultra ",
            "price": 702,
            "id": 13,
        },
        {
            "features": "Laptop, 15.6â€ FHD Display, AMD Ryzen 5 7535U CPU, AMD Radeon Graphics, 16GB RAM, 512GB SSD, Windows 11 Home, Ponder Blue, UM3504DA-AS54",
            "image_url": "/images/shopping/labtops/asus/download.png",
            "name": "ASUS Zenbook 15 Laptop, 15.6â€ FHD",
            "price": 632,
            "id": 14,
        },
        {
            "features": "Laptop, 16â€ 3.2K OLED Touch Display, Intel Core i9-13980HX CPU, Nvidia GeForce RTX 4060 GPU, 32GB DDR5 RAM, 1TB SSD, Windows 11 Home, H7604JV-DS96T, Mineral Black",
            "image_url": "/images/shopping/labtops/asus/se1_p5_img_6.png",
            "name": "ASUS 2023 ProArt StudioBook 16 OLED",
            "price": 239,
            "id": 15,
        },
     


    ];

    return (
        <div className="products">
            <Container>
                <Row className="rowone">
                    
                    {products.map((p) => (
                        <Col data-wow-delay="0.1s" className='img-fluid  center' md="4" key={p.id}>
                            <div className="colone ">
                                <h1 className="mt-3" >{p.name}</h1>
                                <img src={p.image_url} ></img>

                                <h6> {p.features} </h6>
                                <h6 style={{ marginTop: "20px" }}>

                                    {/* <i className="fa-solid fa-location-dot" style={{ color: "#1e6bf1", marginRight: "10px", marginTop: "10px" }}></i>{p.location} */}
                                </h6>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00" , fontSize :"20px"}}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00" , fontSize :"20px"}}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00" , fontSize :"20px"}}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00" , fontSize :"20px"}}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00", marginRight: "10px" , fontSize :"20px"}}></i><br />
                                <button onClick={() => addItem(p)}>Add to cart</button>
                            </div>
                        </Col>
                    ))}
                    <div className="mt-2 pt-2"></div>
                </Row>
            </Container>

        </div>
    );
}



function Product() {
    return (
        <CartProvider>
            <Page />
        </CartProvider>
    );
}
export default Product;