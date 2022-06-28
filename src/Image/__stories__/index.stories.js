import React from 'react';
import { action } from '@storybook/addon-actions';
import Image from '../index';

export default {
    title      : 'Image',
    parameters : {
        component         : Image,
        componentSubtitle : 'A Image shows an image and gallery of them.',
    },
};

export const Default = () => (
    <div style={{ padding: '40px' }}>
        <Image
            mainImage="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/12/06/leo-messi-1.jpeg"
            mainImageTitle="Leonel Messi"
        />
    </div>
);

export const ImagesGallery = () => (
    <div style={{ padding: '40px' }}>
        <Image
            mainImage="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/12/06/leo-messi-1.jpeg"
            mainImageTitle="Leonel Messi"
            showGallery
            images={[
                {
                    title : 'Leonel Messi',
                    url   : 'https://www.elgoldigital.com/wp-content/uploads/messi-2.jpeg',
                },
                {
                    title : 'Leonel Messi',
                    url   : 'https://s3.amazonaws.com/elperiodico.com.gt/wp-content/uploads/2020/03/25003445/messi.jpg',
                },
                {
                    title : 'Leonel Messi',
                    url   : 'https://t.resfu.com/media/img_news/afp_en_da3ec77d2c0ac24225edd768b84b8ae531df1635.jpg?size=776x&q=60',
                },
            ]}
            galleryModalTitle="Leonel Messi images"
        />
    </div>
);
ImagesGallery.story = {
    parameters: { docs: { storyDescription: 'An Image can open an image gallery on click.' } },
};

export const FunctionOnClick = () => (
    <div style={{ padding: '40px' }}>
        <Image
            mainImage="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/12/06/leo-messi-1.jpeg"
            mainImageTitle="Leonel Messi"
            onClick={action('Image clicked')}
        />
    </div>
);
FunctionOnClick.story = {
    parameters: { docs: { storyDescription: 'An Image can trigger an action on click.' } },
};
