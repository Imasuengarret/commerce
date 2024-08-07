import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null); // Initialize as null for a single product

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const foundProduct = data.find((p) => p.id === Number(id)); // Convert id to number
                setProduct(foundProduct || null); // Set the found product or null if not found
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    window.scrollTo({top: 0, behavior: 'smooth'});

    if (!product) {
        return <p>Product not found or loading...</p>; // Provide a fallback UI
    }

    const { title, category, price, image, status } = product;

    return (
        <div className='mt-28 max-w-screen-2xl container mx-auto lg:px-28 px-4'>
            <div className='p-3 max-w-7xl mx-auto'>
                    <div className='lg:mt-4'>
                        <a href="/" className='text-gray-600'>Home </a>
                        <a href="/" className='font-bold text-black'> / Shop</a>
                    </div>
                <div className='mt-10 sm:mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                      <div>
                      {image && <img src={image} alt={title} className='w-full'/>}
                      </div>

                      {/* product detials */}
                        <div>
                            <h1 className='title text-left lg:mt-2'>{title}</h1>
                            <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-2'>Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Doloribus consequuntur 
                                  velit, sit itaque tempora perferendis atque?
                                   Blanditiis, id deleniti?</p>
                                   <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'> 
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                   </span>
                                   <p className='text-xl text-red-500 font-semibold sm:text-2xl'>Price: ${price.toFixed(2)}</p>
                                   <div className='mt-2'>
                            <div className='text-left flex flex-col gap-2 w-full'>
                                <label className='font-semibold'>Quantity</label>
                                <input type="number" name='price' id='price' defaultValue={1} required className='border border-gray-300 text-sm font-semibold mb-2 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-2 md:px-3 focus:border-red-500'/>
                            </div>
                            <div className='w-full text-left my-2'>
                                <button className='mb-10 flex justify-center items-center gap-2 w-full py-2 px-4 bg-red-500 text-white font-bold border border-red-500 rounded ease-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-o md:px-6'><span>Confirm Order</span><FaArrowAltCircleRight/></button>
                            </div>
                        </div>
                                   
                        </div>
                      
                    </div>
                </div>

                <div className='text-black/75 lg:mt-4'>
                    <p>Lorem ipsum dolor sit, amet consectetur
                         adipisicing elit. Iusto, fuga? Facere,
                          accusantium commodi! Tenetur perspiciatis,
                           quis vero ipsa cupiditate labore quia facere
                            impedit inventore temporibus molestiae ea ipsum 
                            obcaecati ad dolores non possimus tempora error molestias
                             voluptatum distinctio repudiandae quibusdam! Commodi 
                             deleniti officiis adipisci vel?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur
                         adipisicing elit. Iusto, fuga? Facere,
                          accusantium commodi! Tenetur perspiciatis,
                           quis vero ipsa cupiditate labore quia facere
                            impedit inventore temporibus molestiae ea ipsum 
                            obcaecati ad dolores non possimus tempora error molestias
                             voluptatum distinctio repudiandae quibusdam! Commodi 
                             deleniti officiis adipisci vel?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur
                         adipisicing elit. Iusto, fuga? Facere,
                          accusantium commodi! Tenetur perspiciatis,
                           quis vero ipsa cupiditate labore quia facere
                            impedit inventore temporibus molestiae ea ipsum 
                            obcaecati ad dolores non possimus tempora error molestias
                             voluptatum distinctio repudiandae quibusdam! Commodi 
                             deleniti officiis adipisci vel?</p>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
