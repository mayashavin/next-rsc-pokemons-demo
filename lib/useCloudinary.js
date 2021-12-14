import { setConfig } from "cloudinary-build-url";

export default function useCloudinary (config = {}) {
    setConfig({
        cloudName: 'mayashavin',
        ...config,
    })
}