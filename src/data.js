import gb8_ram from './img/8gb_ram_server.jpg';
import gb16_ram from './img/16gb_ram_server.jpg';
import gb32_ram from './img/32gb_ram_server.jpg';

const data = {
    products : [
        {
            id: 'serram16',
            name: '16GB RAM Server',
            price: 1025.50,
            image: gb16_ram
        },
        {
            id: 'serram32',
            name: '32GB RAM Server',
            price: 2549.99,
            image: gb32_ram
        },
        {
            id: 'serram8',
            name: '8GB RAM Server',
            price: 100,
            image: gb8_ram
        }
    ]
}

export default data;