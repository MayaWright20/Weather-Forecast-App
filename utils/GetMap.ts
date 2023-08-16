import { GOOGLE_API_KEY} from "@env";

export function getMap(lat, lon){
    const mapImage = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=400x400&maptype=roadmap
    &key=${GOOGLE_API_KEY}`;
    return mapImage;
}