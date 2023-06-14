import { urlFor } from '../sanity';


const Image = ({identifier, image}) => {
    const assetRef = image?.asset?._ref;
    const imageUrl = assetRef ? urlFor(assetRef).url() : null;
    return (
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            {imageUrl ? <img src={imageUrl} /> : <p>Image Unavailable</p>}
        </div>
    )
}

export default Image